const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
    content: {
        type: String,
        required: false,
    },
    profileName: {
        type: String,
        required: false,
    },
    imageUrl: {
        type: String,
        required: false,
    },
    comments: [String],
}, { timestamps: true })

module.exports = mongoose.model('Post', postSchema);