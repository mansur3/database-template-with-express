// const express = require("express");
// const app = express();

//db connection
// const { connection } = require("../../config/db/index");
const { connectionFunc } = require("../../config/db/mysql2");

class UserModel {
  async createTable(data) {
    // const tableObject = data;
    const connection = await connectionFunc();

    const query =
      "CREATE TABLE IF NOT EXISTS user_management.Persons(ID int NOT NULL PRIMARY KEY AUTO_INCREMENT, FirstName VARCHAR(20), LastName VARCHAR(20), Email VARCHAR(20), Phone VARCHAR(13), Age INT, Dob VARCHAR(10) );";
    try {
      await connection.query(query);
      return true;
    } catch (err) {
      return false;
    }
  }
  async create(data) {
    const connection = await connectionFunc();

    const keys = Object.keys(data).join(", ");
    const values = Object.values(data)
      .map((value) => `"${value.toString()}"`)
      .join(", ");

    console.log("keys", keys, values);

    const query = `INSERT INTO user_management.Persons (${keys}) VALUES (${values})`;
    // console.log("query", query);
    // connection.query(query, function (error, results, fields) {
    //   if (error) throw error;
    //   if (results.length > 0) {
    //     return true;
    //   }
    // });
    const [results, fields] = await connection.query(query);

    return results;
  }
  async findOne(data) {
    const connection = await connectionFunc();

    const keys = Object.keys(data);
    const values = Object.values(data);

    const query = `SELECT * FROM user_management.Persons WHERE ID = 1`;
    try {
      const [results, fields] = await connection.query(query);

      //   console.log(results); // results contains rows returned by server
      //   console.log(fields); // fields contains extra meta data about results, if available
      return results;
    } catch (err) {
      console.log(err);
    }
  }
  async find(data) {
    const connection = await connectionFunc();
    const query = `SELECT * FROM user_management.Persons;`;
    try {
      const [results, fields] = await connection.query(query);
      return results;
    } catch (err) {
      console.log(err);
    }
  }
  async update(data, id) {
    const connection = await connectionFunc();

    const keys = Object.keys(data)
      .map((key) => `${key} = "${data[key]}"`)
      .join(", ");

    const query = `UPDATE user_management.Persons SET ${keys} WHERE ID = ${id}`;
    // console.log("query", query);
    try {
      const [results, fields] = await connection.query(query);

      return results;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
  async delete(id) {
    const connection = await connectionFunc();
    const query = `DELETE FROM user_management.Persons WHERE ID = ${id}`;
    try {
      const [results, fields] = await connection.query(query);
      if (results) {
        return true;
      }
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = UserModel;
