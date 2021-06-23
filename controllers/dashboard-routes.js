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
    res.render('dashboard-index', { 
      layout: 'dashboard', 
      users, 
      logged_in: req.session.logged_in 
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

// new pet route
router.get('/create-pet', withAuth, (req, res) => {
  
  // render create-pet template
  res.render('create-pet', { 
    layout: 'dashboard', 
    logged_in: req.session.logged_in 
  });
});

// edit pet route
router.get('/edit-pet/:id', withAuth, async(req, res) => {
  try {
    const petData = await Pet.findByPk(req.params.id, {
      include: [{ model: Comment }, { model: Post }, { model: User }]
    });

    // serialize the data
    const pet = petData.get({ plain: true });

    // render edit-pet template
    res.render('edit-pet', { 
      layout: 'dashboard', 
      ...pet, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// new post route
router.get('/create-post', withAuth, (req, res) => {
  
  // render create-post template
  res.render('create-post', { 
    layout: 'dashboard', 
    logged_in: req.session.logged_in 
  });
});

// edit post route
router.get('/edit-post/:id', withAuth, async(req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: Comment }, { model: Pet }, { model: User }]
    });

    // serialize the data
    const post = postData.get({ plain: true });

    // render edit-post template
    res.render('edit-post', { 
      layout: 'dashboard', 
      ...post, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;