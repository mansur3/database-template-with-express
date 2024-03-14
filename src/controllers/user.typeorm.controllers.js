const express = require("express");
const router = express.Router();
const { AppDataSource } = require("../../config/db/typeorm.js");

const { UserSchema } = require("../models/user.typeorm.models.js");

router.get("/get_user", async (req, res) => {
  //   await AppDataSource.initialize();
  const userRepository = AppDataSource.getRepository(UserSchema);
  const user = await userRepository.find();
  //   manager.find(Photo)

  console.log("user", user);
  return res.status(200).send({
    message: "User fetched successfully.",
  });
});

module.exports = router;
