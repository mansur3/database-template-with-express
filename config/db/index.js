const { connectionFunc } = require("./mysql2");
const { sequelize } = require("./sequelize");
const { AppDataSource } = require("./typeorm");

module.exports = { connectionFunc, sequelize, AppDataSource };
