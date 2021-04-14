const TodoController = require('../controllers/todoController');

const router = require('express').Router();

router.get('/', TodoController.read)
router.post('/', TodoController.add)
router.get('/:id', TodoController.readById)
router.put('/:id', TodoController.update)
router.patch('/:id', TodoController.updateStatus)
router.delete('/:id', TodoController.delete)

module.exports = router;