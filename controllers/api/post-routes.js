// import routes and models
const router = require('express').Router();
const { Comment, Pet, Post, User } = require('../../models');

// GET all posts
router.get('/', async(req, res) => {
try {
    const postData = await Post.findAll({
        include: [{ model: User }]
    });
    res.status(200).json(postData)
    
} catch (err) {
    res.status(500).json(err);
}

});

// GET single post by ID
router.get('/:id', async(req, res) => {
try {
    const postData = await Post.findByPk(req.params.id, {
        include: [{ model: User }]
    });
    if (!postData) {
        res.status(404).json({ message: 'No post with that ID' });
        return;
    }
    res.status(200).json(postData);
} catch (error) {
    
}
});

// CREATE new post
router.post('/', async(req, res) => {
try {
    const postData = await Post.create({
        title: req.body.title,
        category: req.body.category,
        description: req.body.description,
        user_id: req.body.user_id
    });
    res.status(200).json(postData);
    
} catch (err) {
    res.status(400).json(err)
    
}
});

// UPDATE post by ID
router.put('/:id', async(req, res) => {
try {
    const postData = await Post.update(req.body, {
        where: {
            id: req.params.id,
        },
    });
    if (!postData) {
        res.status(404).json({ message: 'No post with this ID' });
        return;
    }
    res.status(200).json(postData);
    
} catch (err) {
    res.status(500).json(err);
}
});

// DELETE post by ID
router.delete('/:id', async(req, res) => {
try {
    const postData = await Post.destroy({
        where: {
            id: req.params.id,
        },
    });
    if (!postData) {
        res.status(404).json({ message: 'No post with this ID was found'})
    }
    res.status(200).json(postData)
    
} catch (err) {
    console.log(err);
    res.status(500).json(err)
}
});

module.exports = router;