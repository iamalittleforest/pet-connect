// import routes and models
const router = require('express').Router();
const { Comment, Pet, Post, User } = require('../models');

// forum route
router.get('/', async(req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    });

    // serialize the data
    const posts = postData.map((post) => post.get({ plain: true }));

    // res.status(200).json(postData);
    res.render('forum', { posts, logged_in: req.session.logged_in });

  } catch (err) {
    res.status(500).json(err);
  }
});

// single post route
router.get('/posts/:id', async(req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username']
        },
        {
          model: Comment,
          attributes: ['comment'],
          include: {
            model: User,
            attributes: ['username']
          }
        }
      ]
    });

    // serialize the data
    const post = postData.get({ plain: true });

    res.render('edit-post', { ...post, logged_in: req.session.logged_in });
    // res.status(200).json(postData);

  } catch (err) {
    res.status(500).json(err);
  }
});

// login route
router.get('/login', (req, res) => {
  
  // if the user is logged in, redirect to forum 
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// sign up route
router.get('/signup', (req, res) => {
  
  // if the user is logged in, redirect to forum 
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  
  res.render('sign-up');
});

module.exports = router;