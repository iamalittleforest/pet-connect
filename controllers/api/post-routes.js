// import routes and models
const router = require('express').Router();
const { Post } = require('../../models');

// import helper to prevent access unless user is logged in
const withAuth = require('../../utils/auth');

// GET all posts
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll();

    res.status(200).json(postData)
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

// GET single post by ID
router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (!postData) {
      res
        .status(404)
        .json({ message: 'No post with this ID' });
      return;
    }

    res.status(200).json(postData);
  } catch (error) {
    console.log(err)
    res.status(500).json(err);
  }
});

// CREATE new post
router.post('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.create({
      ...req.body,
      user_id: req.session.user_id
    });

    res.status(200).json(postData);
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
});

// UPDATE post by ID
router.put('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    if (!postData) {
      res
        .status(404)
        .json({ message: 'No post with this ID' });
      return;
    }

    res.status(200).json(postData);
    console.log(postData)
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

// DELETE post by ID
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    
    if (!postData) {
      res
        .status(404)
        .json({ message: 'No post with this ID' })
      return;
    }

    res.status(200).json(postData)
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

module.exports = router;