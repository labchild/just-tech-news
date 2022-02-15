const router = require('express').Router();

const apiRoutes = require('./apiRoutes');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);


// handle endpoint doesn't exist
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;