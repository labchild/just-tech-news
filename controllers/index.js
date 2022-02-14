const router = require('express').Router();

const apiRoutes = require('./apiRoutes');
const homeRoutes = require('./home-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);


// handle endpoint doesn't exist
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;