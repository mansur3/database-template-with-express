const express = require("express");
const router = express.Router();
const UserModel = require("../models/user.models");
const userModel = new UserModel();

router.get("/get_user_id/:id", async (req, res) => {
  const data = await userModel.findOne({ ID: req.params.id });
  //   console.log("datdddda", data);
  if (data.length > 0) {
    return res.status(200).send({
      message: "User ID was successfully retrieved.",
      data: data,
    });
  }
  return res.status(404).send({
    message: "User is not found.",
    data: [],
  });
});

//done
router.get("/create_user_table", async (req, res) => {
  const user = await userModel.createTable();

  if (user) {
    return res.status(201).send({
      messasge: "User table created successfully",
    });
  }
  return res.status(500).send({
    message: "Something went wrong.",
  });
  // const user = await userModel.create()
});

//done
router.get("/get_all_users", async (req, res) => {
  const user = await userModel.find();
  if (user.length > 0) {
    return res.status(200).send({
      message: "User retrieved successfully",
      data: user,
    });
  }
  return res.status(500).send({
    message: "Internal server error.",
  });
});

//done
router.post("/create_user", async (req, res) => {
  const { FirstName, LastName, Email, Phone, Age, Dob } = req.body;
  const user = await userModel.create(req.body);
  if (user) {
    return res.status(201).send({
      message: "User created successfully",
      data: user,
    });
  }
  return res.status(400).send({
    message: "Something went wrong",
  });
});

router.patch("/update_user/:id", async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  const user = await userModel.update(body, id);

  if (user.length > 0) {
    return res.status(200).send({
      message: "User updated successfully",
      data: user,
    });
  }

  return res.status(400).send({
    message: "Something went wrong",
  });
});

router.delete("/delete_user/:id", async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).send({
      messsage: "Id is required",
    });
  }

  const user = await userModel.delete(id);
  if (user) {
    return res.status(200).send({
      message: "User deleted successfully",
    });
  }
  return res.status(500).send({
    message: "Internal server error",
  });
});

module.exports = router;
