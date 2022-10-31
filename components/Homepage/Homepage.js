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
          <div className="container mx-auto px-10 flex flex-row justify-between items-end h-[75vh]">
            <div className="basis-full lg:basis-2/5 self-center text-center lg:text-justify">
              <div
                className="mb-8 md:my-8"
                dangerouslySetInnerHTML={{ __html: data.homePageIntro }}
              ></div>
              <Link href={data.freeConsultationLink.uri} passHref>
                <a className="text-[17px] lg:text-[19px] inline-flex items-center text-left bg-transparent transition-all duration-150 hover:bg-slate-800 text-white-700 hover:text-white py-4 px-2 lg:px-4 border border-white-500 hover:border-transparent rounded">
                  {data.freeConsultationLabel}{" "}
                  <span className="ml-2">
                    <FaArrowRight />
                  </span>
                </a>
              </Link>
            </div>

            <div
              className="flex-1 relative hidden lg:block h-full header__bgimg"
              style={{
                background: `url(${data.homePageImage.sourceUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center bottom",
              }}
            >
              {/* <Image
                alt="header image"
                src={data.homePageImage.sourceUrl}
                layout="responsive"
                width={13}
                height={15}
                loading="lazy"
              /> */}
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 md:px-0">
          <Blockrenderer blocks={data.blocks} />
        </main>
      </div>
      <Footer footerMenus={data.footerMenus} />
    </>
  );
};
