const router = require('express').Router(); // Import the Express Router

const userRoutes = require('./user-routes'); // Import the user-routes module

router.use('/users', userRoutes); // Use the imported user-routes for the /users path

module.exports = router; // Export the router to be used in other parts of the application






