const express = require("express");
require("reflect-metadata");
const app = express();
require("dotenv").config();
var bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

///main controller list.

const userController = require("./controllers/user.controllers");

//sequelize controller ORM

const userControllerSequelize = require("./controllers/user.sequelize.controller");

//typeOrm controller ORM
const userControllerTypeOrm = require("./controllers/user.typeorm.controllers");

app.use("/api", userController);
app.use("/api/seq", userControllerSequelize);
app.use("/api/typeorm", userControllerTypeOrm);
module.exports = { app };
