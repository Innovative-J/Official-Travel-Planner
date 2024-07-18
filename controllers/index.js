const router = require("express").Router(); // Import the Express Router

const homeRoutes = require("./home-routes.js"); // Import the home-routes module

router.use("/", homeRoutes); // Use the imported home-routes for the root path

module.exports = router; // Export the router to be used in other parts of the application