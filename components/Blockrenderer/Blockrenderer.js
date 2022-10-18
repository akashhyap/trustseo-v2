import { Cover } from "components/Cover";
import { Heading } from "components/Heading";
import { Paragraph } from "components/Paragraph";
import { Columns } from "components/Columns";
import { Column } from "components/Column";
import Image from "next/image";
import { PostArchive } from "components/PostArchive";

export const Blockrenderer = ({ blocks }) => {
  // console.log("blocks==>", blocks);

  return blocks.map((block) => {
    switch (block.name) {
      case "core/paragraph": {
        return <Paragraph key={block.id} content={block.attributes.content} />;
      }
      case "core/heading": {
        // console.log("heading", block.saveContent);
        return (
          <Heading
            key={block.id}
            level={block.attributes.level}
            content={block.attributes.content}
            allContent={block.saveContent}
          />
        );
      }
      case "core/cover": {
        return (
          <Cover key={block.id} background={block.attributes.url}>
            <Blockrenderer blocks={block.innerBlocks} />
          </Cover>
        );
      }
      case "core/columns": {
        return (
          <Columns
            key={block.id}
            isStackOnMobile={block.attributes.isStackOnMobile}
          >
            <Blockrenderer blocks={block.innerBlocks} />
          </Columns>
        );
      }
      case "core/column": {
        return (
          <Column key={block.id} width={block.attributes.width}>
            <Blockrenderer blocks={block.innerBlocks} />
          </Column>
        );
      }
      case "core/group":
      case "core/block": {
        return <Blockrenderer blocks={block.innerBlocks} />;
      }

      case "core/list": {
        return (
          <div key={block.id} dangerouslySetInnerHTML={{ __html: block.saveContent }}></div>
        );
      }

      case "core/image": {
        return (
          <Image
            alt={block.attributes.alt || ""}
            key={block.id}
            src={block.attributes.url}
            height={block.attributes.originalHeight}
            width={block.attributes.originalWidth}
          />
        );
      }
      case "acf/postarchive": {
        
        return (
          <PostArchive key={block.id} />
        );
      }

      default:
        console.log("UNKNOWN", block.name);
        return null;
    }
  });
};
