const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const checkAuth = require("../middlewares/checkAuth");

const router = express.Router();

router.get("/", checkAuth, async (req, res) => {
  try {
    const allUsers = await User.find();
    return res.status(200).json({ users: allUsers, success: true });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message, success: false });
  }
});

router.get("/getUser", checkAuth, async (req, res) => {
  const { id } = req.user;
  try {
    const user = await User.findById(id);
    return res.status(200).json({ user, success: true });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message, success: false });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user)
      return res
        .status(500)
        .json({ message: "Invalid login credentials", success: false });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res
        .status(500)
        .json({ message: "Invalid login credentials", success: false });

    const payload = {
      user: { id: user.id, success: true },
    };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
      (err, token) => {
        if (err) throw new Error(err);
        res.json({ token, success: true });
      }
    );
  } catch (error) {
    console.error(err);
    res.status(500).json({ message: "Server Error", success: false });
  }
});

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    // check if user already exists
    const userExist = await User.findOne({ username });
    if (userExist)
      return res.status(400).json({
        message: "User with given credentials already exists",
        success: false,
      });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create a new user
    const user = new User({ username, password: hashedPassword });
    const payload = {
      user: { id: user.id },
    };

    await jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
      async (err, token) => {
        if (err) throw new Error(err.message);
        await user.save();
        return res
          .status(201)
          .json({ message: "User created successfully", token, success: true });
      }
    );
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message, success: false });
  }
});

module.exports = router;
