"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
exports.__esModule = true;
var SQLConnection_1 = require("./SQLConnection");
var Property_1 = require("../models/Property");
exports.properties = function () {
    var query = "SELECT * FROM properties";
    return new Promise(function (resolve, reject) {
        SQLConnection_1["default"].query(query, [], function (err, results) {
            if (err) {
                return reject(err);
            }
            var properties = [];
            for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
                var result = results_1[_i];
                var propertyId = result.propertyId, address = result.address, squareMeters = result.squareMeters, type = result.type, description = result.description;
                properties.push(new Property_1["default"](propertyId, address, squareMeters, type, description));
            }
            resolve(properties);
        });
    });
};
exports.property = function (propertyId) {
    var query = "SELECT * FROM properties WHERE property_id = ?";
    return new Promise(function (resolve, reject) {
        SQLConnection_1["default"].query(query, [propertyId], function (err, result) {
            if (err) {
                return reject(err);
            }
            var propertyId = result.propertyId, address = result.address, squareMeters = result.squareMeters, type = result.type, description = result.description;
            var property = new Property_1["default"](propertyId, address, squareMeters, type, description);
            resolve(property);
        });
    });
};
exports.getPropertiesByRealEstate = function (realEstateId) {
    var query = "SELECT property_id, address, square_meters, type, description FROM real_estates_properties INNER JOIN properties ON properties.property_id = real_estates_properties.property_id WHERE real_estate_id = ? ";
    return new Promise(function (resolve, reject) {
        SQLConnection_1["default"].query(query, [realEstateId], function (err, results) {
            if (err) {
                return reject(err);
            }
            var properties = [];
            for (var _i = 0, results_2 = results; _i < results_2.length; _i++) {
                var result = results_2[_i];
                var propertyId = result.propertyId, address = result.address, squareMeters = result.squareMeters, type = result.type, description = result.description;
                properties.push(new Property_1["default"](propertyId, address, squareMeters, type, description));
            }
            resolve(properties);
        });
    });
};
exports.addProperty = function (address, squareMeters, type, description) { return __awaiter(_this, void 0, void 0, function () {
    var query;
    var _this = this;
    return __generator(this, function (_a) {
        query = "INSERT INTO Properties VALUES(?, ?, ?, ?)";
        return [2 /*return*/, new Promise(function (resolve, reject) {
                SQLConnection_1["default"].query(query, [undefined, address, squareMeters, type, description], function (err, results) { return __awaiter(_this, void 0, void 0, function () {
                    var property;
                    return __generator(this, function (_a) {
                        if (err) {
                            reject(err);
                            return [2 /*return*/];
                        }
                        property = new Property_1["default"](results.insertId, address, squareMeters, type, description);
                        resolve(property);
                        return [2 /*return*/];
                    });
                }); });
            })];
    });
}); };
exports.editProperty = function (propertyId, address, squareMeters, type, description) { return __awaiter(_this, void 0, void 0, function () {
    var query;
    var _this = this;
    return __generator(this, function (_a) {
        query = "UPDATE Properties SET (?, ?, ?, ?) WHERE property_id = ?";
        return [2 /*return*/, new Promise(function (resolve, reject) {
                SQLConnection_1["default"].query(query, [address, squareMeters, type, description, propertyId], function (err, results) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        if (err) {
                            return [2 /*return*/, reject(err)];
                        }
                        return [2 /*return*/];
                    });
                }); });
            })];
    });
}); };
exports.deleteProperty = function (propertyId) { return __awaiter(_this, void 0, void 0, function () {
    var query;
    var _this = this;
    return __generator(this, function (_a) {
        query = "DELETE FROM Properties WHERE property_id = ?";
        return [2 /*return*/, new Promise(function (resolve, reject) {
                SQLConnection_1["default"].query(query, [propertyId], function (err, results) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        if (err) {
                            return [2 /*return*/, reject(err)];
                        }
                        return [2 /*return*/];
                    });
                }); });
            })];
    });
}); };
