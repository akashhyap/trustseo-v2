import { usePageContext } from "Context/Page";
import Image from "next/image";

export const Cover = ({ children, background }) => {
  const {featuredImage} = usePageContext()
  return (
    <div className="relative min-h-[400px]">
      {!!background || !!featuredImage && (
        <Image
         alt=""
         src={background || featuredImage}
         layout="fill"
         objectFit="cover"
        />
      )}
      <div className="header_intro_txt">{children}</div>
    </div>
  );
};
