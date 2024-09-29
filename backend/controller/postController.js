const { red } = require('colors')
const Post = require('../models/postModel')
const mongoose = require('mongoose')

// get all post
const getPosts = async (req, res) => {
    const posts = await Post.find({}).sort({ createdAt: -1 })
    res.status(200).json(posts)
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
    const { content, profileName, imageUrl, comments } = req.body

    try {
        const post = await Post.create({ content, profileName, imageUrl, comments })
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
    const { content, profileName, imageUrl, comments } = req.body


    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such post' })
    }

    const post = await Post.findOneAndUpdate({ _id: id }, {
        content,
        profileName,
        imageUrl,
        comments
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