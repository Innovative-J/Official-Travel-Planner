const router = require('express').Router(); // Import the Express Router
const { User } = require('../../models'); // Import the User model from the models directory

// CREATE new user
router.post('/', async (req, res) => {
  try {
    // Attempt to create a new user in the database with the provided username, email, and password
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });


    // If the user is successfully created, attempt to create a new booking associated with the username
    const dbBookingData = await Booking.create({
      id: username, // Assuming 'username' should be a variable; if it's meant to be 'req.body.username', change accordingly
      flights: req.body.flights,
      itinerary: req.body.itinerary,
    });

    // Send a response with the created user and booking data
    res.status(200).json({ dbUserData, dbBookingData });
  } catch (err) {
    // If there's an error, send a response with the error message
    res.status(500).json(err);
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    // Find a user in the database with the provided email
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    // If no user is found with that email, send a 400 status and an error message
    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

   // Once the user successfully logs in, set up the session variable 'loggedIn'
   req.session.save(() => {
    req.session.loggedIn = true;

    // Send a 200 status with the user data and a success message
    res
      .status(200)
      .json({ user: dbUserData, message: 'You are now logged in!' });
  });
} catch (err) {
  // Log any errors to the console and send a 500 status with the error
  console.log(err);
  res.status(500).json(err);
}
});

// Logout route
router.post('/logout', (req, res) => {
  // If the user is logged in, destroy the session
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      // Send a 204 status to indicate the session was successfully destroyed
      res.status(204).end();
    });
  } else {
    // If the user is not logged in, send a 404 status
    res.status(404).end();
  }
});

module.exports = router; // Export the router to be used in other parts of the application