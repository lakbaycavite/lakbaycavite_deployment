const express = require('express')
const Post = require('../models/postModel')
const {
        createPost,
        getPosts,
        getPost,
        deletePost,
        updatePost
} = require('../controller/postController')

const router = express.Router()

// Show all post
router.get('/', getPosts)

// Get a single post
router.get('/:id', getPost)

// Create a post
router.post('/', createPost)

// Update a post
router.put('/update/:id', updatePost)

// Delete a post
router.delete('/delete/:id', deletePost)


module.exports = router