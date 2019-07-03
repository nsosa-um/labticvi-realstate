"use strict";
exports.__esModule = true;
require('dotenv').config();
var jsonToken = require('jsonwebtoken');
var apollo_server_1 = require("apollo-server");
var resolvers_1 = require("./resolvers");
var graphql_tools_1 = require("graphql-tools");
var schema_1 = require("./schema");
var schema = graphql_tools_1.mergeSchemas({
    schemas: schema_1["default"],
    resolvers: resolvers_1["default"]
});
var decryptToken = function (token) {
    try {
        return jsonToken.verify(token, 'realestatesupersecretoquenadiesabe');
    }
    catch (err) {
        return undefined;
    }
};
var server = new apollo_server_1.ApolloServer({
    schema: schema
});
server.listen().then(function (_a) {
    var url = _a.url;
    console.log("\uD83D\uDE80 Server ready at " + url);
});
