const express = require("express");
const Room = require("../models/Room");
const checkAuth = require("../middlewares/checkAuth");

const router = express.Router();

// Get all rooms (public)
router.get("/", async (req, res) => {
  try {
    const rooms = await Room.find().sort({ order: 1, createdAt: -1 });
    return res.status(200).json({ rooms, success: true });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message, success: false });
  }
});

// Get single room (public)
router.get("/:id", async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) {
      return res.status(404).json({ message: "Room not found", success: false });
    }
    return res.status(200).json({ room, success: true });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message, success: false });
  }
});

// Create room (requires auth)
router.post("/", checkAuth, async (req, res) => {
  try {
    const room = new Room(req.body);
    await room.save();
    return res.status(201).json({ room, success: true });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message, success: false });
  }
});

// Update room (requires auth)
router.put("/:id", checkAuth, async (req, res) => {
  try {
    const room = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!room) {
      return res.status(404).json({ message: "Room not found", success: false });
    }
    return res.status(200).json({ room, success: true });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message, success: false });
  }
});

// Delete room (requires auth)
router.delete("/:id", checkAuth, async (req, res) => {
  try {
    const room = await Room.findByIdAndDelete(req.params.id);
    if (!room) {
      return res.status(404).json({ message: "Room not found", success: false });
    }
    return res.status(200).json({ message: "Room deleted successfully", success: true });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message, success: false });
  }
});

module.exports = router; 