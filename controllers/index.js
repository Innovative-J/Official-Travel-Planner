const router = require("express").Router(); // Import the Express Router

const homeRoutes = require("./home-routes.js"); // Import the home-routes module

router.use("/", homeRoutes);

module.exports = router;
