const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user)
      return res
        .status(500)
        .json({ message: "Invalid login credentials", success: false });

    const isMatch = bcrypt.compare(password, user.password);
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
    console.error(err.message);
    res.status(500).json({ message: "Server Error", success: false });
  }
});

module.exports = router;
