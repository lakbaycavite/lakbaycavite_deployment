const { red } = require('colors')
const Post = require('../models/postModel')
const mongoose = require('mongoose')

// get all post
// const getPosts = async (req, res) => {
//     const posts = await Post.find({}).sort({ createdAt: -1 })
//     res.status(200).json(posts)
// }

const getPosts = async (req, res) => {
    
    try {
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 10
        const skip = (page - 1) * limit

        const total = await Post.countDocuments()
        const posts = await Post.find().skip(skip).limit(limit).sort({ createdAt: 1 })

        res.status(200).json({ posts, total, page, pages: Math.ceil(total/ limit) })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// get a single post
const getPost = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such post' })
    }


    const post = await Post.findById(id)

    if (!post) {
        return res.status(404).json({ error: 'No such post' })
    }

    res.status(200).json(post)
}

// create new post
const createPost = async (req, res) => {
    const { title, content, user, imageUrl, comments } = req.body

    try {
        const post = await Post.create({ title, content, user, imageUrl, comments })
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete a post
const deletePost = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such post' })
    }

    const post = await Post.findOneAndDelete({ _id: id })

    if (!post) {
        return res.status(404).json({ error: 'No such post' })
    }

    res.status(200).json(post)

}

// update a post

const updatePost = async (req, res) => {
    const { id } = req.params
    const { title, content, eventType, attachments } = req.body


    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such post' })
    }

    const post = await Post.findOneAndUpdate({ _id: id }, {
        title,
        content,
        eventType,
        attachments
    })

    if (!post) {
        return res.status(404).json({ error: 'No such post' })
    }

    res.status(200).json(post)
}

module.exports = {
    createPost,
    getPosts,
    getPost,
    deletePost,
    updatePost
}