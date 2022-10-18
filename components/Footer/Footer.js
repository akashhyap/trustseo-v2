import Link from "next/link";

export const Footer = ({footerMenus}) => {
//   console.log("MENU Footer", footerMenus);
  return (
    <footer className="bg-slate-800">
      <div className="container mx-auto px-10 flex items-center text-white">
        <div className="flex flex-1 justify-end">
          {footerMenus.edges.map((item) => (
            <div key={item.node.id} className="menu_item relative group">
              <Link href={item.node.path} passHref>
                <a className="px-5">{item.node.label}</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
