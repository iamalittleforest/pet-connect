// import routes and models
const router = require('express').Router();
const { Comment, Pet, Post, User } = require('../../models');

// GET all posts
router.get('/', async(req, res) => {

});

// GET single post by ID
router.get('/', async(req, res) => {

});

// CREATE new post
router.post('/', async(req, res) => {

});

// UPDATE post by ID
router.put('/:id', (req, res) => {

});

// DELETE post by ID
router.delete('/:id', async(req, res) => {

});

module.exports = router;