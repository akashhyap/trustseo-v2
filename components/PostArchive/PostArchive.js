import { usePageContext } from "Context/Page";
import Image from "next/image";
import Link from "next/link";

export const PostArchive = () => {
  const { posts } = usePageContext();

  // console.log("POSTS", posts);

  return (
    <div className="grid grid-cols-3 gap-5 mb-10">
      {!!posts &&
        posts.edges.map((post, index) => {
          return (
            <>
              <Link href={post.node.uri} passHref>
                <a className="p-5">
                  <div className="relative aspect-video">
                    <Image
                      alt=""
                      src={post.node.featuredImage.node.sourceUrl}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div key={post.databaseId}>
                    <h3>{post.node.title}</h3>
                  </div>
                </a>
              </Link>
            </>
          );
        })}
    </div>
  );
};
