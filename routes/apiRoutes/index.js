const router = require('express').Router();

const userRoutes = require('./user-routes');

router.use('/users', userRoutes);
router.use('/posts', require('./post-routes'));

module.exports = router;