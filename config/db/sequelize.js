const Sequelize = require("sequelize");
const sequelize = new Sequelize("user_management", "root", "password", {
  host: "127.0.0.1",
  dialect: "mysql",
});

module.exports = { sequelize };
