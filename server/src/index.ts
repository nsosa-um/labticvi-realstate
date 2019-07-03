require('dotenv').config();
const jsonToken = require('jsonwebtoken');
import { ApolloServer } from "apollo-server";
import resolvers from "./resolvers";
import { GraphQLSchema } from "graphql";
import { mergeSchemas } from 'graphql-tools'
import schemas from "./schema";

const schema : GraphQLSchema = mergeSchemas({
	schemas,
	resolvers
});

const decryptToken = (token: any) : any => {
	try {
		  return jsonToken.verify(token, 'realestatesupersecretoquenadiesabe')
	  } catch (err) {
		return undefined
	}
}

const server = new ApolloServer({
	schema
});

server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});
