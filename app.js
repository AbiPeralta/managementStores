"use strict";
exports.__esModule = true;
var express_1 = require("express");
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var dotenv_1 = require("dotenv");
var path_1 = require("path");
var couponsRoutes_1 = require("./src/routes/couponsRoutes");
var storesRoutes_1 = require("./src/routes/storesRoutes");
dotenv_1["default"].config({ path: path_1["default"].resolve(__dirname, '../.env') });
var app = express_1["default"]();
typeorm_1.createConnection();
//middleware
app.use(express_1["default"].json());
//routes
app.use(couponsRoutes_1["default"]);
app.use(storesRoutes_1["default"]);
app.listen(3306);
