// import routes
const router = require('express').Router();
const apiRoutes = require('./api');
const forumRoutes = require('./forum-routes');
const homeRoutes = require('./home-routes');

// prefix all routes
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/forum', forumRoutes);

module.exports = router;