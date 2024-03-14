const { DataSource } = require("typeorm");

const AppDataSource = new DataSource({
  type: "mysql",
  host: "127.0.0.1",
  port: 3306,
  username: "root",
  password: "password",
  database: "user_management",
  synchronize: true,
  entities: [require("../../src/models/user.typeorm.models")],
});

module.exports = { AppDataSource };
