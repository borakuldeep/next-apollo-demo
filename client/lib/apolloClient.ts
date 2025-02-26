import { useMemo } from "react";
 import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
 import { offsetLimitPagination } from "@apollo/client/utilities";

 let apolloClient: ApolloClient<NormalizedCacheObject>;

 //const APOLLO_SERVER = 'https://nextapolloserver.herokuapp.com/';
 const APOLLO_SERVER = 'http://localhost:4000/';

 function createApolloClient():ApolloClient<NormalizedCacheObject> {
   return new ApolloClient({
     ssrMode: false, // set to false for SSR
     link: new HttpLink({
       uri: APOLLO_SERVER,
     }),
     cache: new InMemoryCache({
        typePolicies: {
            Query: {
              fields: {
                users: offsetLimitPagination()
              },
            },
          },
     }),
   });
 }

 export function initializeApollo(initialState: null | object) {
    const _apolloClient = apolloClient ?? createApolloClient();

    // If your page has Next.js data fetching methods that use Apollo Client,
    // the initial state gets hydrated here
    if (initialState) {
      // Get existing cache, loaded during client side data fetching
      const existingCache = _apolloClient.extract();

      // Restore the cache using the data passed from
      // getStaticProps/getServerSideProps combined with the existing cached data
      _apolloClient.cache.restore({ ...existingCache, ...initialState });
    }

    // For SSG and SSR always create a new Apollo Client
    if (typeof window === "undefined") return _apolloClient;

    // Create the Apollo Client once in the client
    if (!apolloClient) apolloClient = _apolloClient;
    return _apolloClient;
  }

  export function useApollo(initialState: null | object) {
    const store = useMemo(() => initializeApollo(initialState), [initialState]);
    return store;
  }