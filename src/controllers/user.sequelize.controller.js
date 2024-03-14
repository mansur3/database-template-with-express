const express = require("express");
const router = express.Router();

const User = require("../models/user.sequelize.models");

router.get("/get_user_seq", async (req, res) => {
  const users = await User.findALL();
  if (users.length > 0) {
    return res.status(200).send({
      message: "Data fetched successfully.",
      data: users,
    });
  }
  return res.status(500).send({
    message: "Internal Server Error.",
  });
});
router.post("/create_user_seq", async (req, res) => {
  const data = req.body;
  const user = await User.create(req.body, {
    fields: ["username", "password"],
  });
  //   console.log("User", user)

  if (user) {
    return res.status(201).send({
      message: "User created successfully.",
      data: user,
    });
  }
  return res.status(400).send({
    message: "Something went wrong.",
  });
});
router.patch("/update_user_seq/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  const user = await User.update(
    // id, data
    data,
    {
      where: {
        id: id,
      },
    }
  );
  if (user) {
    return res.status(200).send({
      message: "User updated successfully.",
    });
  }
  return res.status(400).send({
    message: "Something went wrong.",
  });
});

router.delete("/delete_user_seq/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.destroy({
    where: {
      id: id,
    },
  });
  if (user) {
    return res.status(200).send({
      message: "User deleted successfully.",
      data: user,
    });
  }
  return res.status(400).send({
    message: "User deleted successfully.",
  });
});

module.exports = router;
