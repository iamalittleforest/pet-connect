// import routes
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');

// prefix all routes
router.use('/', dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/home', homeRoutes);

module.exports = router;