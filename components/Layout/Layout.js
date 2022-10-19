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
    <PageWrapper
      value={{ featuredImage: data.featuredImage, posts: data.latestPosts }}
    >
      <div
        className={`bg-slate-800 sticky top-0 z-20 py-3 transition ease-in-out duration-150 ${
          scrollPosition > 0 ? "py-1 scroll_style" : ""
        }`}
      >
        <MainMenu
          items={data.mainMenuItems}
          siteLogo={data.siteLogo}
          menu={data.topMenu}
        />
      </div>
      <main className="container mx-auto px-4 py-10 md:px-0 min-h-full">
        <Blockrenderer blocks={data.blocks} />
      </main>
      <Footer footerMenus={data.footerMenus} />
    </PageWrapper>
  );
};
