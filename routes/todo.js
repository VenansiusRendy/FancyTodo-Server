const TodoController = require("../controllers/todoController");
const { todoAuthorization } = require("../middlewares/auth");

const router = require("express").Router();

router.get("/", TodoController.read);
router.post("/", TodoController.add);

router.get("/:id", todoAuthorization, TodoController.readById);
router.put("/:id", todoAuthorization, TodoController.update);
router.patch("/:id", todoAuthorization, TodoController.updateStatus);
router.delete("/:id", todoAuthorization, TodoController.delete);

module.exports = router;
