const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema({
  hotelName: {
    type: String,
    default: "Planete Hotel"
  },
  about: {
    type: String,
    default: "Welcome to Planete Hotel, your perfect getaway in Rwanda."
  },
  contact: {
    phone: {
      type: String,
      default: "+250 785 512 860"
    },
    email: {
      type: String,
      default: "info@planetehotel.com"
    },
    address: {
      type: String,
      default: "Kigali, Rwanda"
    }
  },
  social: {
    facebook: String,
    instagram: String,
    twitter: String,
    linkedin: String
  },
  services: [{
    title: String,
    description: String,
    icon: String
  }],
  amenities: [{
    name: String,
    description: String,
    available: {
      type: Boolean,
      default: true
    }
  }],
  policies: {
    checkIn: {
      type: String,
      default: "2:00 PM"
    },
    checkOut: {
      type: String,
      default: "11:00 AM"
    },
    cancellation: {
      type: String,
      default: "Free cancellation up to 24 hours before check-in"
    }
  }
}, { timestamps: true });

const Settings = mongoose.model("Settings", settingsSchema);

module.exports = Settings;
