const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema({
 
});

const Settings = mongoose.model("Settings", settingsSchema);

module.exports = Settings;
