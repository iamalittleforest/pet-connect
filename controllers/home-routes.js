// import routes and models
const router = require('express').Router();
const { Comment, Pet, Post, User } = require('../models');

// dashboard route
router.get('/', async(req, res) => {

});

// new pet route
router.get('/create-pet', (req, res) => {

});

// edit pet route
router.get('/edit-pet/:id', async(req, res) => {

});

// new post route
router.get('/create-post', (req, res) => {

});

// edit post route
router.get('/edit-post/:id', async(req, res) => {

});

module.exports = router;