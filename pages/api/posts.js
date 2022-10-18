import { gql } from "@apollo/client";
import { client } from "client";


async function fetchAPI(query, {variables} = {}) {
  const headers = {'Content-Type': 'application/json'};

  const res = await fetch(process.env.WP_GRAPHQL_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({query, variables}),
  });

  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getLatestPosts() {
  const data = await fetchAPI(
    `
      query AllPosts {
        posts(first: 10, where: { orderby: { field: DATE, order: DESC } }) {
          edges {
            node {
              databaseId
              title
              excerpt
              uri
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        }
      }
    `
  );

  return data?.posts;
}

// const handler = async (req, res) => {
//   try {
//     const { data } = await client.query({
//       query: gql`
//         query AllPosts {
//           posts {
//             nodes {
//               databaseId
//               title
//               uri
//               featuredImage {
//                 node {
//                   uri
//                   sourceUrl
//                 }
//               }
//             }
//           }
//         }
//       `,
//     });
//     console.log("SERVER SIDE: ", data.posts.nodes);
//     return res.status(200).json({
//       posts: data.posts.nodes,  
//     });
    

//   } catch (e) {
//     console.log("ERROR", req);
//   }
// };

// export default handler;
