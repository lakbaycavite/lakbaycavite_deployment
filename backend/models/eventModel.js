const mongoose = require('mongoose')

const Schema = mongoose.Schema

const eventSchema = new Schema({
    title: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    imageUrl: {
        type: String,
        required: false,
    },
    eventType: {
        type: String,
        required: false
    },
}, { timestamps: true })

module.exports = mongoose.model('Event', eventSchema);