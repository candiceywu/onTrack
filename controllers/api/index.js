const router = require('express').Router();
const practiceRoute = require('./practiceRoute');

router.use('/practiceRoute', practiceRoute);

module.exports = router;