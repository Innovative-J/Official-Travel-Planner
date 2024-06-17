const router = require("express").Router();

router.get("/", (req, res) => {
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
