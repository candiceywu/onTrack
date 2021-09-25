const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const scopeRoutes = require('./scopeRoutes');

router.use('/users', userRoutes);
router.use('/project', projectRoutes);
router.use('/scope', scopeRoutes);

module.exports = router;
