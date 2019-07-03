"use strict";
exports.__esModule = true;
var SQLConnection_1 = require("./SQLConnection");
var RealEstate_1 = require("../models/RealEstate");
exports.realEstates = function () {
    var query = "SELECT * FROM real_estates";
    var args = [];
    return new Promise(function (resolve, reject) {
        SQLConnection_1["default"].query(query, args, function (err, results) {
            if (err) {
                return reject(err);
            }
            var realEstates = [];
            for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
                var result = results_1[_i];
                var realEstateId = result.realEstateId, name_1 = result.name, mail = result.mail, address = result.address, phoneNumber = result.phoneNumber;
                realEstates.push(new RealEstate_1["default"](realEstateId, name_1, mail, address, phoneNumber));
            }
            resolve(realEstates);
        });
    });
};
exports.realEstate = function (realEstateId) {
    var query = "SELECT * FROM real_estates where real_estate_id = ?";
    var args = [realEstateId];
    return new Promise(function (resolve, reject) {
        SQLConnection_1["default"].query(query, args, function (err, result) {
            if (err) {
                return reject(err);
            }
            var realEstateId = result.realEstateId, name = result.name, mail = result.mail, address = result.address, phoneNumber = result.phoneNumber;
            var realEstate = new RealEstate_1["default"](realEstateId, name, mail, address, phoneNumber);
            resolve(realEstate);
        });
    });
};
