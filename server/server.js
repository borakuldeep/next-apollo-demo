// const express = require('express')
// const bodyParser = require('body-parser')
// const cors = require('cors')
// const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
// const myGraphQLSchema = require('./schema')

// const app = express();

// // to access graphql API from the client side
// app.use(cors())
// // bodyParser is needed just for POST.
// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));
// // for the graphiql interface
// app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// const port = process.env.PORT || 5000
// app.listen(port, (err) => {
//   if (err) throw err
//   console.log(`Graphql Server started on: http://localhost:${port}`)
// })

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const casual = require('casual');

const getUser = () => ({
  name: casual.name,
  gender: () => { return ['Ms.', 'Mrs.', 'Miss'].includes(casual.name_prefix) ? 'F':'M' },
  email: casual.email,
  address: {
    street: casual.street,
    city: casual.city,
    country: casual.country
  },
  phone: casual.phone
});

var array_of = function(times, generator) {
	var result = [];

	for (var i = 0; i < times; ++i) {
		result.push(generator());
	}

	return result;
};

const resolvers = {
  Query: {
    user: () => getUser(),
    users: () => array_of(10, getUser),
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(() => {
  console.log(`
    Server is running!
    Listening on port 4000
    Explore at https://studio.apollographql.com/dev
  `);
});
