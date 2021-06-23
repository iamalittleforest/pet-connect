// import routes and models
const router = require('express').Router();
const { Comment, Pet, Post, User } = require('../models');

<<<<<<< HEAD
// dashboard route
router.get('/', async(req, res) => {
try {
  const data = await User.findAll({
    include: [{ model: Comment }, { model: Pet }, { model: Post }],
  });
  //    for rendering pg
  const dataArr = dataArr.map((posts) => this.posts.get({ plain: true }));
  res.render('home'), {
      posts,
      logged_in: req.session.logged_in
  }
  res.status(200).json(data);
} catch (err) {
  res.status(500).json(err);
}
=======
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
>>>>>>> 9c99ca7bc504ff86c54d312d3d5f763b7d06cb07
});

// new pet route
router.get('/create-pet', withAuth, (req, res) => {
  res.render('create-pet', { 
    layout: 'dashboard', 
    logged_in: req.session.logged_in 
  });
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