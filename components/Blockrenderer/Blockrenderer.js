import { Cover } from "components/Cover";
import { Heading } from "components/Heading";
import { Paragraph } from "components/Paragraph";
import { Columns } from "components/Columns";
import { Column } from "components/Column";
import Image from "next/image";
import { PostArchive } from "components/PostArchive";
import { FormspreeForm } from "components/FormspreeForm";

export const Blockrenderer = ({ blocks }) => {
  // console.log("blocks==>", blocks);

  return blocks.map((block) => {
    // console.log("PARA", block);
    switch (block.name) {
      case "core/paragraph": {
        return <Paragraph key={block.id} content={block.attributes.content} cssClass={block.attributes.className}/>;
      }
      case "core/heading": {
        // console.log("heading", block);
        return (
          <Heading
            key={block.id}
            level={block.attributes.level}
            content={block.attributes.content}
            textAlign={block.attributes.textAlign}
            style={block.attributes.style}
            cssClass={block.attributes.className}
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
       
        const cssClass = block.attributes.className

        //  console.log("blocks cssClass==>", cssClass);

        return (
          <Columns
            key={block.id}
            isStackOnMobile={block.attributes.isStackOnMobile}
            cssClass={cssClass}
          >
            <Blockrenderer key={block.id} blocks={block.innerBlocks} />
          </Columns>
        );
      }
      case "core/column": {
        // console.log("blocks==>", blocks);
        return (
          <Column
            key={block.id}
            width={block.attributes.width}
          >
            <Blockrenderer key={block.id} blocks={block.innerBlocks} />
          </Column>
        );
      }
      case "core/group":
      case "core/block": {
        return <Blockrenderer key={block.id} blocks={block.innerBlocks} />;
      }

      case "core/list": {
        return (
          <div
            key={block.id}
            dangerouslySetInnerHTML={{ __html: block.saveContent }}
          ></div>
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
        return <PostArchive key={block.id} />;
      }
      case "acf/formspreeform": {
        return <FormspreeForm key={block.id} formId={block.attributes.data.form_id} />;
      }

      default:
        console.log("UNKNOWN", block.name);
        return null;
    }
  });
};
