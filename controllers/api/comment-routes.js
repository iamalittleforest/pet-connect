// import routes and models
const router = require('express').Router();
const { Comment } = require('../../models');

// import helper to prevent access unless user is logged in
const withAuth = require('../../utils/auth');

// GET all comments
router.get('/', async (req, res) => {
  try {
    const commentData = await Comment.findAll();

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE new comment
router.post('/', withAuth, async(req, res) => {
  try {
    const commentData = await Comment.create({
      ...req.body,
      user_id: req.session.user_id
    });
    
    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;