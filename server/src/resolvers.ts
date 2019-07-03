import { property, properties, addProperty, editProperty, deleteProperty, getPropertiesByRealEstate } from './controllers/Property'
import { agent, agents, login } from './controllers/Agent'
import AgentLogin from './models/AgentLogin'
import Agent from './models/Agent'
import { realEstate, realEstates } from './controllers/RealEstate'
import { AuthenticationError } from 'apollo-server';
const jsonToken = require('jsonwebtoken');

const propertyResolver = {
    Query: {
		properties: (_ : any, {} : {}) => {
			return properties();
        },
        property: (_ : any, {propertyId} : {propertyId: Number}) => {
			return property(propertyId);
        },
        getPropertiesByRealEstate: (_ : any, {realEstateId} : {realEstateId: Number}) => {
			return property(realEstateId);
        }
    },
    Mutation: {
        addProperty: (_: any, 
			{address, squareMeters, type, description} : {address: string, squareMeters: Number, type: string, description: string},
			context : any) => {
				return addProperty(address, squareMeters, type, description);
        },
        editProperty: (_: any, 
			{propertyId, address, squareMeters, type, description} : {propertyId: Number, address: string, squareMeters: Number, type: string, description: string},
			context : any) => {
				return editProperty(propertyId, address, squareMeters, type, description);
        },
        deleteProperty: (_: any, 
			{propertyId} : {propertyId: Number},
			context : any) => {
				return deleteProperty(propertyId);
        }
    }
}

const agentResolver = {
    Query: {
        agent: (_ : any, {agentId} : {agentId: Number}) => {
			return agent(agentId);
        },
        agents: (_ : any, {} : {}) => {
			return agents();
        }
    },
    Mutation: {
        login: async (_ : any, {username, password} : {username: string, password: string}) : Promise<AgentLogin> => {
			return login(username, password)
				.then((agent: Agent): Promise<AgentLogin> => {
					if (agent.password == password){
						const token = jsonToken.sign(
							{
								id: agent.userId,
                                username: agent.username,
                                password: agent.password
							},
							'realestatesupersecretoquenadiesabe',
							{ expiresIn: '15d' }
						)
						return Promise.resolve(new AgentLogin(agent, token))
					}
				})
				.catch((error: string) : Promise<any> => {
					return Promise.reject(new AuthenticationError(error))
				})
		}
    }
}

const realEstateResolver = {
    Query: {
        realEstate: (_ : any, {realEstateId} : {realEstateId: Number}) => {
			return realEstate(realEstateId);
        },
        realEstates: (_ : any, {} : {}) => {
			return realEstates();
        }
    }
}

const resolvers = [propertyResolver, agentResolver, realEstateResolver];
export default resolvers;
