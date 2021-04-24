# next-apollo-demo
Simple EXample App created in Next.js and Apollo (using typescrit)

DEMO:  https://next-apollo-client-kappa.vercel.app/

# client
Created using NextJS and Apollo client. Requests and renders list of users at /users. The json data is NOT statically rendered at build time and hence 'loading' icon will be shown on user/ page upon loading. To statically render 10 usres at build time, uncomment 'getStaticProps' function in user.js page.

> Note: for local run, change server APOLLO_SERVER = 'http://localhost:4000/' in lib/apolloClient.js (because heroku server have CORS disabled for rest of source other than demo client url)

# server
Created using Apollo server. Sends user list of 10 users at a time. Server URL: https://nextapolloserver.herokuapp.com/

> Note: first time it might take few seconds to load users as the server might be sleeping (heroku free tier)

> NOTE: for local run, change coreOptions origin to '*' in server.js to allow local client testing
