// import routes and models
const router = require('express').Router();
const { Comment, Pet, Post, User } = require('../../models');

// GET all comments
router.get('/', async (req, res) => {
   try {
       const commentData = await Comment.findAll({
         include: [
           {
             model: Comment,
           },
         ],
       });
       const commentsArr = commentData.map((comment) => comment.get({ plain: true }))
       //view page must be filled.
       res.render('', {
           commentsArr,
           //Middleware loggin validation
           loggedIn: req.session.loggedIn
       })
   } catch (err) {
       console.log(err);
       res.status(500).json(err);
   }

});

// CREATE new comment
router.post('/', async(req, res) => {
    try {
        const commentData = await Comment.create({
        ...req.body.description
        })
        res.status(200).json(commentData)
    } catch (error) {
        res.status(400)
    }
    
});

module.exports = router;