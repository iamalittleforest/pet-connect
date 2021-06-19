// import routes
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

// prefix all routes
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;