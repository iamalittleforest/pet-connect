// import routes and models
const router = require('express').Router();
const { Comment, Pet, Post, User } = require('../models');

// home route
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User }],
      order: [["id", "DESC"]],
    });

    // serialize the data
    const posts = postData.map((post) => post.get({ plain: true }));

    // render home-posts view
    res.render('home-posts', {
      layout: 'home',
      posts,
      logged_in: req.session.logged_in
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

// single post route
router.get('/posts/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        { model: User },
        { model: Comment, include: { model: User } }
      ]
    });

    // serialize the data
    const post = postData.get({ plain: true });

    // render create-comment view
    res.render('create-comment', {
      layout: 'home',
      ...post,
      logged_in: req.session.logged_in
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

// login route
router.get('/login', (req, res) => {

  // if the user is logged in, redirect to home 
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  // render login view
  res.render('login', {
    layout: 'home'
  });
});

// sign up route
router.get('/signup', (req, res) => {

  // if the user is logged in, redirect to home 
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  // render sign-up view
  res.render('sign-up', {
    layout: 'home'
  });
});

module.exports = router;