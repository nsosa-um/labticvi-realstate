import { gql, makeExecutableSchema, GraphQLSchemaModule } from 'apollo-server';

const schema = makeExecutableSchema({
  typeDefs: gql`
    type Agent {
      user_id: ID!
      username: String!
      password: String!
      real_estate_id: ID!
    }
    
    type User {
      user_id: ID!
      phone_number: String!
      mail: String!
      surname: String!
      ci: String!
    }
    
    type Property {
      property_id: ID!
      address: String!
      square_meters: String!
      type: String!
      description: String!
    }

    type RealEstate {
      real_estate_id: ID!
      name: String!
      mail: String!
      address: String!
      phone_number: String!
    }

    type AgentLogin {
      agent: Agent,
      token: String
    }

    type Mutation {
      addProperty(address: String!, square_meters: String!, type: String!, description: String!): Boolean
      editProperty(property_id: ID!, address: String, square_meters: String, type: String, description: String): Boolean
      deleteProperty(property_id: ID!): Boolean
      login(username: String, password: String): AgentLogin!
    }

    type Query {
      properties: [Property!]
      property(property_id: ID!): Property
      getPropertiesByRealEstate(real_estate_id: ID!): [Property!]
      realEstates: [RealEstate!]
      realEstate(real_estate_id: ID!): RealEstate
      agents: [Agent!]
      agent(agent_id: ID!): Agent
    }
  `
})
const schemas = [schema]
export default schemas;
