const express = require("express");
const Booking = require("../models/Booking");
const Room = require("../models/Room");
const checkAuth = require("../middlewares/checkAuth");

const router = express.Router();

// Get all bookings (requires auth)
router.get("/", checkAuth, async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate('room')
      .sort({ createdAt: -1 });
    return res.status(200).json({ bookings, success: true });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message, success: false });
  }
});

// Get single booking (requires auth)
router.get("/:id", checkAuth, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate('room');
    if (!booking) {
      return res.status(404).json({ message: "Booking not found", success: false });
    }
    return res.status(200).json({ booking, success: true });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message, success: false });
  }
});

// Create booking (public)
router.post("/", async (req, res) => {
  try {
    const { roomId, checkIn, checkOut, guests, guest } = req.body;
    
    // Check if room exists and is available
    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({ message: "Room not found", success: false });
    }
    
    if (!room.available) {
      return res.status(400).json({ message: "Room is not available", success: false });
    }
    
    // Calculate total amount (simple calculation - can be enhanced)
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
    const totalAmount = room.price * nights;
    
    const booking = new Booking({
      room: roomId,
      checkIn,
      checkOut,
      guests,
      guest,
      totalAmount
    });
    
    await booking.save();
    return res.status(201).json({ booking, success: true });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message, success: false });
  }
});

// Update booking status (requires auth)
router.put("/:id/status", checkAuth, async (req, res) => {
  try {
    const { status, paymentStatus, notes } = req.body;
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status, paymentStatus, notes },
      { new: true }
    ).populate('room');
    
    if (!booking) {
      return res.status(404).json({ message: "Booking not found", success: false });
    }
    return res.status(200).json({ booking, success: true });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message, success: false });
  }
});

// Delete booking (requires auth)
router.delete("/:id", checkAuth, async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found", success: false });
    }
    return res.status(200).json({ message: "Booking deleted successfully", success: true });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message, success: false });
  }
});

module.exports = router; 