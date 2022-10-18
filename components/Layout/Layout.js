import { Blockrenderer } from "components/Blockrenderer";
import { MainMenu } from "components/MainMenu";
import { useScrollPosition } from "../../hooks";
import { useRouter } from "next/router";
import { Footer } from "components/Footer";
import { PageWrapper } from "Context/Page";

export const Layout = (data) => {
  // console.log("DATA", data);
  const router = useRouter();

  const scrollPosition = useScrollPosition();
  return (
    <PageWrapper value={{featuredImage:data.featuredImage, posts:data.latestPosts}}>
      <div
        className={`bg-slate-800 sticky top-0 z-20 py-3 transition ease-in-out duration-150 ${
          scrollPosition > 0 ? "py-1 scroll_style" : ""
        }`}
      >
        <MainMenu items={data.mainMenuItems} siteLogo={data.siteLogo} menu={data.topMenu} />
      </div>
      <Blockrenderer blocks={data.blocks}/>
      <Footer footerMenus={data.footerMenus}/>
      
    </PageWrapper>
  );
};
