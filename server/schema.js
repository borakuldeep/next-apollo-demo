// const {
//   graphql,
//   GraphQLSchema,
//   GraphQLObjectType,
//   GraphQLString
// } = require('graphql')
// const faker = require('faker')

// module.exports = new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: 'RootQueryType',
//     fields: {
//       name: {
//         type: GraphQLString,
//         resolve() {
//           return faker.name.findName()
//         }
//       }
//     }
//   })
// })

const { gql } = require('apollo-server');

const typeDefs = gql`
  # Your schema will go here
  type User {
  name: String!
  gender: String!
  email: String
  address: Address
  phone: String
}

type Address {
  street: String
  city: String!
  country: String!
}

type Query {
  users(offset: Int, limit: Int): [User]
  user: User
}
`;

module.exports = typeDefs;
