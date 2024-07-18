const router = require("express").Router(); // Import the Express Router

const homeRoutes = require("./home-routes.js");

router.use("/", homeRoutes);

module.exports = router;
