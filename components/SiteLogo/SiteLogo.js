import Image from "next/image";
import Link from "next/link";

export const SiteLogo = ({ logoSrc }) => {
  return (
    <div className="basis-20 logo_wrapper">
      <Link href="/" passHref>
        <a className="sitelogo">
          <Image
            src={logoSrc}
            layout="responsive"
            width={84}
            height={60}
            alt="Site logo"
          />
        </a>
      </Link>
    </div>
  );
};
