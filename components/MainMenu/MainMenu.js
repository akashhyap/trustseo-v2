import { SiteLogo } from "components/SiteLogo";
import Link from "next/link";

export const MainMenu = ({ siteLogo, menu }) => {
  // console.log("MENU COMP", menu);
  return (
    <div className="mainMenu container mx-auto px-10 flex items-center text-white">
      <SiteLogo logoSrc={siteLogo.sourceUrl} />
      <div className="flex flex-1 justify-end">
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
