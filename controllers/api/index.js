// import routes
const router = require('express').Router();
const commentRoutes = require('./comment-routes');
const petRoutes = require('./pet-routes');
const postRoutes = require('./post-routes');
const userRoutes = require('./user-routes');

// prefix all routes 
router.use('/comments', commentRoutes);
router.use('/pets', petRoutes);
router.use('/posts', postRoutes);
router.use('/users', userRoutes);

module.exports = router;