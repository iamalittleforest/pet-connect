// import routes and models
const router = require('express').Router();
const { Comment, Pet, Post, User } = require('../../models');

// GET all posts
router.get('/', async(req, res) => {
// const postData = await Post.
});

// GET single post by ID
router.get('/:id', async(req, res) => {
// const postData = await Post.
});

// CREATE new post
router.post('/', async(req, res) => {
// const postData = await Post.
});

// UPDATE post by ID
router.put('/:id', (req, res) => {
// const postData = await Post.
});

// DELETE post by ID
router.delete('/:id', async(req, res) => {
// const postData = await Post.
});

module.exports = router;