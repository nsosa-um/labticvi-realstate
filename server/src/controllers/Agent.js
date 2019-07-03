"use strict";
exports.__esModule = true;
var SQLConnection_1 = require("./SQLConnection");
var Agent_1 = require("../models/Agent");
exports.login = function (username, password) {
    return new Promise(function (resolve, reject) {
        SQLConnection_1["default"].query("SELECT * FROM agents WHERE username = ? AND password = ?", username, password, function (err, results) {
            if (err) {
                return reject(err);
            }
            var _a = results[0], username = _a.username, password = _a.password, userId = _a.userId, realEstateId = _a.realEstateId;
            resolve(new Agent_1["default"](username, password, userId, realEstateId));
        });
    });
};
exports.agents = function () {
    var query = "SELECT * FROM agents";
    var args = [];
    return new Promise(function (resolve, reject) {
        SQLConnection_1["default"].query(query, args, function (err, results) {
            if (err) {
                return reject(err);
            }
            var agents = [];
            for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
                var result = results_1[_i];
                var usernme = result.usernme, password = result.password, userId = result.userId, realEstateId = result.realEstateId;
                agents.push(new Agent_1["default"](usernme, password, userId, realEstateId));
            }
            resolve(agents);
        });
    });
};
exports.agent = function (agentId) {
    var query = "SELECT * FROM agents where user_id = ?";
    var args = [agentId];
    return new Promise(function (resolve, reject) {
        SQLConnection_1["default"].query(query, args, function (err, result) {
            if (err) {
                return reject(err);
            }
            var usernme = result.usernme, password = result.password, userId = result.userId, realEstateId = result.realEstateId;
            var agent = new Agent_1["default"](usernme, password, userId, realEstateId);
            resolve(agent);
        });
    });
};
