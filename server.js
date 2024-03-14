const { app } = require("./src/index");
//Database configuration

const { sequelize } = require("./config/db/index");
const { connectionFunc } = require("./config/db/mysql2");
const { AppDataSource } = require("./config/db/index");
app.listen(process.env.PORT || 2233, async (req, res) => {
  //mysql with typeorm

  AppDataSource.initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
    })
    .catch((err) => {
      console.error("Error during data source initialization.");
    });

  // mysql database connection
  connectionFunc();

  // Sequelize database connection
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((error) => {
      console.error("Unable to connect to the database: ", error);
    });
  await sequelize.sync();

  console.log("Listening on port ", process.env.PORT || 2233);
});
