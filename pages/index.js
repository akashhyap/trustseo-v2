import { Layout } from "components/Layout";
import { Homepage } from "components/Homepage";
import { getPageStaticProps } from "utils/getPageStaticProps";
import { useRouter } from "next/router";
import Head from "next/head";


export default function Home(props) {
  const router = useRouter();
  // console.log('router',router);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      {router.asPath === '/' && <Homepage data={props}/> || <Layout props={props}/>}
    </>
  );
}

export const getStaticProps = getPageStaticProps;
