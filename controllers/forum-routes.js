// import routes and models
const router = require('express').Router();
const { Comment, Pet, Post, User } = require('../../models');

// forum route
router.get('/', async(req, res) => {

});

// single post route
router.get('/post/:id', async(req, res) => {

});

// login route
router.get('/login', (req, res) => {

});

// sign up route
router.get('/signup', (req, res) => {

});

module.exports = router;