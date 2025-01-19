const {gql} = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: String!
    friends: [User]
    favmovie: Movie
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
    movie(name: String!): Movie
  }
  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: String = "india"
  }
  input UpdateUsernameInput {
    id: ID!
    newUsername: String!
  }
  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUsername(input: UpdateUsernameInput!): User
    deleteUser(id: ID!): User
  }
`;

module.exports = {typeDefs};