// import routes and models
const router = require('express').Router();
const { Comment, Pet, Post, User, User } = require('../../models');

// GET all users
router.get('/', async(req, res) => {
const User = await User.findAll({})
});

// GET single user by ID
router.get('/:id', async(req, res) => {
// const User = await User.
});

// CREATE new user
router.post('/', async(req, res) => {
// const User = await User.
});

// login
router.post('/login', async(req, res) => {
// const User = await User.
});

// logout
router.post('/logout', (req, res) => {
// const User = await User.
});

module.exports = router;