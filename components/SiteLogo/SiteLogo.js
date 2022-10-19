import Image from "next/image";
import Link from "next/link";

export const SiteLogo = ({ logoSrc }) => {
  return (
    <div className="basis-20 logo_wrapper">
      <Link href="/" passHref>
        <a>
          <Image
            src={logoSrc}
            layout="responsive"
            width={84}
            height={60}
            alt="Site logo"
            className="sitelogo"
          />
        </a>
      </Link>
    </div>
  );
};
