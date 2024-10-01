const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type: String,
        required: false,
    },
    content: {
        type: String,
        required: false,
    },
    user: {
        type: String,
        required: false,
    },
    attachments: {
        type: [String],
        required: false,
    },
    comments: [String],
}, { timestamps: true })

module.exports = mongoose.model('Post', postSchema);