const router = require("express").Router();
const WeatherController = require("../controllers/weatherController");
const { authentication } = require("../middlewares/auth");
const todoRoutes = require("./todo");
const userRoutes = require("./user");

router.get("/weather", WeatherController.checkWeather);
router.use("/", userRoutes);
router.use(authentication);
router.use("/todos", todoRoutes);

module.exports = router;
