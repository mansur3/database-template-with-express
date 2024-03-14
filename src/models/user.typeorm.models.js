// Import necessary modules
const { EntitySchema } = require("typeorm");

// Define the entity schema
const UserSchema = new EntitySchema({
  name: "users",
  tableName: "users",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    username: {
      type: "varchar",
    },
    email: {
      type: "varchar",
    },
    password: {
      type: "varchar",
    },
  },
});

// Export the User entity schema
module.exports = { UserSchema };
