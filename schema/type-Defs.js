const {gql} = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: String!
    friends: [User]
  }
  type Movie {
    id: ID!
    name: String!
    yearofpublication: Int!
    isInTheater: Boolean!
  }
  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }
`;

module.exports = {typeDefs};