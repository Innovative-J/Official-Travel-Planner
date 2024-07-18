const router = require("express").Router(); // Import the Express Router

// Login route
router.get("/", (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'homepage' template
  res.render("homepage");
});

// Dashboard route
router.get("/dashboard", (req, res) => {
  // Render the 'dashboard' template
  res.render("dashboard");
});

// Bookings route
router.get("/bookings", (req, res) => {
  // Render the 'bookings' template
  res.render("bookings");
});

// Contact route
router.get("/contact", (req, res) => {
  // Render the 'contact' template
  res.render("contact");
});

module.exports = router; // Export the router to be used in other parts of the application