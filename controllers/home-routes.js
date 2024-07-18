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


router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

router.get("/bookings", (req, res) => {
  res.render("bookings");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});


module.exports = router;
