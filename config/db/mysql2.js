const mysql = require("mysql2/promise");
// import mysql from "mysql2/promise";

const connectionFunc = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "user_management",
  });
  return connection;
};

module.exports = { connectionFunc };

// connection.connect();

// connection.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
//   if (error) throw error;
//   console.log("The solution is: ", results[0].solution);
// });

// connection.end();
