"use strict";
exports.__esModule = true;
var apollo_server_1 = require("apollo-server");
var typeDefs = require('./schema');
var server = new apollo_server_1.ApolloServer({ typeDefs: typeDefs });
server.listen().then(function (_a) {
    var url = _a.url;
    console.log("\uD83D\uDE80 Server ready at " + url);
});
