import { withApollo } from "next-apollo";
import { gql, ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

// apolloClient
//   .query({
//     query: gql`
//       query ExampleQuery {
//         users {
//           name
//           email
//           phone
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));

export default withApollo(apolloClient);
