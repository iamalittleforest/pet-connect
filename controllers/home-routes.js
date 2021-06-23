// import routes and models
const router = require('express').Router();
const { Comment, Pet, Post, User } = require('../models');

// import helper to prevent access unless user is logged in
const withAuth = require('../utils/auth');

// dashboard
router.get('/', withAuth, async(req, res) => {
  try {
    const userData = await User.findAll({
      where: {
        user_id: req.session.user_id
      },
      include: [{ model: Comment }, { model: Pet }, { model: Post }],
    });

    // serialize the data
    const users = userData.map((user) => user.get({ plain: true }));

    // for rendering pg
    res.render('dashboard-posts', { 
      layout: 'dashboard', 
      users, 
      logged_in: req.session.logged_in 
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// new pet route
router.get('/create-pet', withAuth, (req, res) => {
  res.render('create-pet', { 
    layout: 'dashboard', 
    logged_in: req.session.logged_in 
  });
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