const router = require("express").Router();
const { authentication } = require("../middlewares/auth");
const todoRoutes = require("./todo");
const userRoutes = require("./user");

router.get("/", (req, res) => {
	res.send("Hello world");
});
router.use("/", userRoutes);
router.use(authentication);
router.use("/todos", todoRoutes);

module.exports = router;
