const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const scopeRoutes = require('./scopeRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/scope', scopeRoutes);

module.exports = router;
