import { Blockrenderer } from "components/Blockrenderer";
import { MainMenu } from "components/MainMenu";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Footer } from "components/Footer";
import { useEffect, useState } from "react";

export const Homepage = ({ data }) => {
  // console.log("HOME", data);

  const [stateNavbar, setStateNavbar] = useState(false);

  useEffect(() => {
    const fixNavBar = () => {
      if (window.scrollY > 0) {
        setStateNavbar(true);
      } else {
        setStateNavbar(false);
      }
    };
    window.addEventListener("scroll", fixNavBar);

    return () => {
      window.removeEventListener("scroll", fixNavBar);
    };
  }, []);

  return (
    <>
      <div className="homepage">
        <header className="header">
          <div
            className={`scroll_style ${
              stateNavbar ? "scroll_style_after" : ""
            }`}
          >
            <MainMenu
              items={data.mainMenuItems}
              siteLogo={data.siteLogo}
              menu={data.topMenu}
            />
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
                loading="lazy"
              />
            </div>
          </div>
        </header>

        <main className="container mx-auto">
          <Blockrenderer blocks={data.blocks} />
        </main>
      </div>
      <Footer footerMenus={data.footerMenus} />
    </>
  );
};
