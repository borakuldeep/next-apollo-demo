import express from 'express';
import cors from 'cors';

import typeDefs from './schema';
import { getUser, array_of} from './serverFunctions';

const {  ApolloServer } = require('apollo-server-express');

const resolvers = {
  Query: {
    user: () => getUser(),
    users: () => array_of(10, getUser),
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
app.use(cors());

server.applyMiddleware({
  app,
  path: '/',
  cors: true,
})


const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Graphql Server started on: http://localhost:${port}`)
})

