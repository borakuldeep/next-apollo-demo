# next-apollo-demo
Simple EXample App created in Next.js and Apollo

DEMO:  https://next-apollo-client-kappa.vercel.app/

# client
Created using NextJS and Apollo client. Requests and renders list of users at /users. Since app is statically generated at build time, first 10 users in users page will always be same. When requested via 'Load more' button at end of users page, the server will return new random users.

> Note: for local run, change server APOLLO_SERVER = 'http://localhost:4000/' in lib/apolloClient.js (because heroku server have CORS disabled for rest of source other than demo client url)

# server
Created using Apollo server. Sends user list of 10 users at a time. Server URL: https://nextapolloserver.herokuapp.com/

> Note: first time it might take few seconds to load users as the server might be sleeping (heroku free tier)
> NOTE: for local run, change coreOptions origin to '*' in server.js to allow local client testing
