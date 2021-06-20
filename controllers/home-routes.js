// import routes and models
const router = require('express').Router();
const { Comment, Pet, Post, User } = require('../models');

// dashboard route
router.get('/', async(req, res) => {
try {
  const data = await User.findAll({
    include: [{ model: Comment }, { model: Pet }, { model: Post }],
  });
  //    for rendering pg
  // const dataArr = dataArr.map((posts) => this.posts.get({ plain: true }));
  // res.render(''), {
  //     posts,
  //     logged_in: req.session.logged_in
  // }
  res.status(200).json(data);
} catch (err) {
  res.status(500).json(err);
}
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