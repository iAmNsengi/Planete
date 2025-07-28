const express = require("express");
const Settings = require("../models/Settings");
const checkAuth = require("../middlewares/checkAuth");

const router = express.Router();

// Get all settings
router.get("/", async (req, res) => {
  try {
    let settings = await Settings.findOne();
    if (!settings) {
      settings = new Settings();
      await settings.save();
    }
    return res.status(200).json({ settings, success: true });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message, success: false });
  }
});

// Update settings (requires auth)
router.put("/", checkAuth, async (req, res) => {
  try {
    const updateData = req.body;
    let settings = await Settings.findOne();
    
    if (!settings) {
      settings = new Settings(updateData);
    } else {
      Object.assign(settings, updateData);
    }
    
    await settings.save();
    return res.status(200).json({ settings, success: true });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message, success: false });
  }
});

module.exports = router; 