import { Blockrenderer } from "components/Blockrenderer";
import { MainMenu } from "components/MainMenu";
import Image from "next/image";
import Link from "next/link";
import { useScrollPosition } from "../../hooks";
import { FaArrowRight } from "react-icons/fa";
import { Footer } from "components/Footer";

export const Homepage = ({data}) => {
  const scrollPosition = useScrollPosition();

  return (
    <>
     <div className="homepage">
      <header className="header">
        <div
          className={`sticky top-0 z-20 py-3 transition ease-in-out duration-150 ${
            scrollPosition > 0 ? "bg-slate-800 py-1 scroll_style" : "bg-slate-0"
          }`}
        >
          <MainMenu items={data.mainMenuItems} siteLogo={data.siteLogo} menu={data.topMenu} />
        </div>
        <div className="container mx-auto px-10 flex flex-row justify-between">
          <div className="basis-1/2 max-w-[40%] self-center text-justify">
            <div
              className="mb-10"
              dangerouslySetInnerHTML={{ __html: data.homePageIntro }}
            ></div>
            <Link href={data.freeConsultationLink.uri} passHref>
              <a className="inline-flex items-center bg-transparent transition-all duration-150 hover:bg-slate-800 text-white-700 hover:text-white py-4 px-4 border border-white-500 hover:border-transparent rounded">
                {data.freeConsultationLabel}{" "}
                <span className="ml-2">
                  <FaArrowRight />
                </span>
              </a>
            </Link>
          </div>

          <div className="basis-1/2 relative">
            <Image
              alt="header image"
              src={data.homePageImage.sourceUrl}
              layout="responsive"
              width={610}
              height={648}
            />
          </div>
        </div>
      </header>

      <main>
        <Blockrenderer blocks={data.blocks} />
      </main>
    </div>
    <Footer footerMenus={data.footerMenus}/>
    </>
   
  );
};
