const express = require("express");
const Gallery = require("../models/Gallery");
const checkAuth = require("../middlewares/checkAuth");

const router = express.Router();

// Get all gallery images (public)
router.get("/", async (req, res) => {
  try {
    const images = await Gallery.find().sort({ order: 1, createdAt: -1 });
    return res.status(200).json({ images, success: true });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message, success: false });
  }
});

// Create gallery image (requires auth)
router.post("/", checkAuth, async (req, res) => {
  try {
    const image = new Gallery(req.body);
    await image.save();
    return res.status(201).json({ image, success: true });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message, success: false });
  }
});

// Update gallery image (requires auth)
router.put("/:id", checkAuth, async (req, res) => {
  try {
    const image = await Gallery.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!image) {
      return res
        .status(404)
        .json({ message: "Image not found", success: false });
    }
    return res.status(200).json({ image, success: true });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message, success: false });
  }
});

// Delete gallery image (requires auth)
router.delete("/:id", checkAuth, async (req, res) => {
  try {
    const image = await Gallery.findByIdAndDelete(req.params.id);
    if (!image) {
      return res
        .status(404)
        .json({ message: "Image not found", success: false });
    }
    return res
      .status(200)
      .json({ message: "Image deleted successfully", success: true });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message, success: false });
  }
});

module.exports = router;
