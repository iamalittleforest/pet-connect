// import routes and models
const router = require('express').Router();
const { Comment, Pet, Post, User } = require('../../models');

// GET all pets
router.get('/', async(req, res) => {

});

// GET single pet by ID
router.get('/', async(req, res) => {

});

// CREATE new pet
router.post('/', async(req, res) => {

});

// UPDATE pet by ID
router.put('/:id', (req, res) => {

});

// DELETE pet by ID
router.delete('/:id', async(req, res) => {

});

module.exports = router;