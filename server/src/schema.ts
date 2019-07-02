const { gql } = require('apollo-server');

const typeDefs = gql`

  type Query {

    properties: [Property!]
    property(property_id: String!): Property

    realEstates: [RealEstate!]
    realEstate(real_estate_id: String!): RealEstate

    agents: [Agent!]
    agent(agent_id: String!): Agent

    getPropertiesByRealEstate(real_estate_id: String!): [Property!]

  }

  type Agent {
    user_id: String!
    username: String!
    password: String!
    real_estate_id: String!
  }
  
  type User {
    user_id: String!
    phone_number: String!
    mail: String!
    surname: String!
    ci: String!
  }
  
  type Property {
    property_id: String!
    address: String!
    square_meters: String!
    type: String!
    description: String!
  }

  type RealEstate {
    real_estate_id: String!
    name: String!
    mail: String!
    address: String!
    phone_number: String!
  }

  type Mutation {
  
    addProperty(address: String!, square_meters: String!, type: String!, description: String!): Boolean

    editProperty(property_id: String!, address: String, square_meters: String, type: String, description: String): Boolean

    deleteProperty(property_id: String!): Boolean
  
    login(username: String, password: String): String
  }

`;

module.exports = typeDefs;