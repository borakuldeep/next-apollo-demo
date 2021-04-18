# next-apollo-demo
Simple Next.js example with Apollo

DEMO:  https://next-apollo-client-kappa.vercel.app/

# client
Created using NextJS and Apollo client. Requests and renders list of users at /users. Since app is statically generated at build time, first 10 users in users page will always be same. When requested via 'Load more' button at end of users page, the server will return new random users.

# server
Created using Apollo server. Sends user list of 10 users at a time

> Note: first time 'Load more' might take few seconds as the server might be sleeping (heroku free tier)
