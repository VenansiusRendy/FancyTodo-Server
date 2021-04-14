const router = require('express').Router();
const todoRoutes = require('./todo');

router.get('/', (req, res) => {
    res.send('Hello world');
})
router.use('/todos', todoRoutes);


module.exports = router;