import { useState } from "react";
import { SiteLogo } from "components/SiteLogo";
import Link from "next/link";
import { FaHamburger, FaCrop } from "react-icons/fa";

export const MainMenu = ({ siteLogo, menu }) => {
  // console.log("MENU COMP", menu);
  const [shownav, setShowNav] = useState(false);

  const menuHandler = (event) => {
    setShowNav(!shownav);
  };

  return (
    <div className="mainMenu container mx-auto px-10 items-center text-white flex justify-between">
      {/* Site logo */}
      <SiteLogo logoSrc={siteLogo.sourceUrl} />

      {/* Toggle Menu Icon */}
      <span className="md:hidden toggle_icon" onClick={menuHandler}>
        <FaHamburger />
      </span>

      {/* Menu */}
      <div
        className={`md:flex flex-1 justify-end menu_wrapper px-10 md:px-0 translate-x-full md:transform-none ${
          shownav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <span className="flex md:hidden toggle_icon" onClick={menuHandler}>
          <FaCrop />
        </span>

        {menu.edges.map((item) => (
          <div key={item.node.id} className="menu_item relative group">
            <Link href={item.node.path} passHref>
              <a className="px-5">{item.node.label}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
