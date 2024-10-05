const mongoose = require("mongoose")

const galleryImageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
})

const Gallery = mongoose.model("Gallery", galleryImage)

module.exports = Gallery