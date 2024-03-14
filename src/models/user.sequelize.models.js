const { sequelize } = require("../../config/db/index");
const { DataTypes } = require("sequelize");

const User = sequelize.define("users", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
