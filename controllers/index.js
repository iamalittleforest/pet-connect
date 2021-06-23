// import routes
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashRoutes = require('./dashboard-routes');

// prefix all routes
router.use('/', dashRoutes);
router.use('/api', apiRoutes);
router.use('/home', homeRoutes);

module.exports = router;