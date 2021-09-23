const router = require('express').Router();
const { Practice } = require('../../models')

router.get('/', (req, res) => {
    try {
        res.status(200).json({ message: "Route Works"})
    } catch (err){
        res.status(500).json(err);
    }
});

module.exports = router;