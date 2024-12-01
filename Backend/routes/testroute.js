const express = require("express");
const router = express.Router();
const user = require("../models/User.model");
router.get("/", (req, res) => {
  res.send("testing");
});
router.post("/", async (req, res) => {
  //register
  try {
    const newuser = await user.create(req.body);
    res.status(200).json(newuser);
  } catch (error) {
    res.status(500).json({ error });
  }
});
router.get("/users", async (req, res) => {
  //get all
  try {
    const allusers = await user.find({});
    res.status(200).json(allusers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/user/:id", async (req, res) => {
  // get 1
  try {
    const { id } = req.params;
    const singleuser = await user.findById(id);
    res.status(200).json(singleuser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/user/:id", async (req, res) => {
  //update
  try {
    const { id } = req.params;
    const updated_user = await user.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updated_user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const delete_user = await user.findByIdAndDelete(id);
    res.status(200).json({ delete: delete_user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
