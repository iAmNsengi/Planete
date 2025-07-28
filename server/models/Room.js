const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  type: {
    type: String,
    required: true,
    enum: ['Standard', 'Deluxe', 'Suite', 'Presidential Suite']
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  capacity: {
    type: Number,
    required: true,
    min: 1,
    max: 10
  },
  size: {
    type: Number, // in square meters
    required: true
  },
  amenities: [{
    type: String
  }],
  images: [{
    type: String
  }],
  features: [{
    type: String
  }],
  available: {
    type: Boolean,
    default: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

const Room = mongoose.model("Room", roomSchema);

module.exports = Room; 