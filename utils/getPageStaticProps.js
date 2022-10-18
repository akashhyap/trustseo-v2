import { gql } from "@apollo/client";
import client from "client";
import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";
import { getLatestPosts } from "../pages/api/posts";

export const getPageStaticProps = async (context) => {
  // console.log("CONTEXT: ", context);
  const uri = context.params?.slug ? `/${context.params.slug.join("/")}/` : "/";

  const { data } = await client.query({
    query: gql`
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            title
            content
            blocksJSON
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
          ... on Post {
            id
            title
            content
            blocksJSON
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
        headerMenus: menuItems(where: { location: HCMS_MENU_HEADER }) {
          edges {
            node {
              id
              label
              url
              path
            }
          }
        }
        footerMenus: menuItems(where: { location: HCMS_MENU_FOOTER }) {
          edges {
            node {
              id
              label
              url
              path
            }
          }
        }
        acfOptionsMainMenu {
          menuOptions {
            siteLogo {
              sourceUrl
            }
            homepageIntroText
            homepageIntroImage {
              sourceUrl
            }
            homePageImageAdvance {
              sourceUrl
            }
            freeConsultationLabel
            freeConsultationLink {
              ... on Page {
                uri
              }
            }
            menuItems {
              menuItem {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
              items {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
            }
          }
        }
      }
    `,

    variables: {
      uri,
    },
  });

  const blocks = await cleanAndTransformBlocks(data.nodeByUri.blocksJSON);
  const topMenu = data.headerMenus;
  const footerMenus = data.footerMenus;

  const content = data.nodeByUri.content;
  const featuredImage = data.nodeByUri.featuredImage?.node?.sourceUrl || null;

  const siteLogo = data.acfOptionsMainMenu.menuOptions.siteLogo;
  const homePageIntro = data.acfOptionsMainMenu.menuOptions.homepageIntroText;
  const homePageImage = data.acfOptionsMainMenu.menuOptions.homepageIntroImage;
  const homePageImageAdvance = data.acfOptionsMainMenu.menuOptions.homePageImageAdvance;
  const freeConsultationLabel =
    data.acfOptionsMainMenu.menuOptions.freeConsultationLabel;
  const freeConsultationLink =
    data.acfOptionsMainMenu.menuOptions.freeConsultationLink;

  const latestPosts = await getLatestPosts();

  return {
    props: {
      siteLogo,
      featuredImage,
      homePageIntro,
      homePageImage,
      homePageImageAdvance,
      freeConsultationLabel,
      freeConsultationLink,
      blocks,
      content,
      topMenu,
      footerMenus,
      latestPosts
    },
  };
};
