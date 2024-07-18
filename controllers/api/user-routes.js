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

// Login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    // Once the user successfully logs in, set up the sessions variable 'loggedIn'
    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  // When the user logs out, destroy the session
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
