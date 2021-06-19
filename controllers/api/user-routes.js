// import routes and models
const router = require('express').Router();
const { Comment, Pet, Post, User } = require('../../models');

// GET all users
router.get('/', async(req, res) => {

});

// GET single user by ID
router.get('/', async(req, res) => {

});

// CREATE new user
router.post('/', async(req, res) => {

});

// login
router.post('/login', async(req, res) => {

});

// logout
router.post('/logout', (req, res) => {

});

module.exports = router;