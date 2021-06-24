// import routes and models
const router = require('express').Router();
const { User } = require('../../models');
 
// GET all users
router.get('/', async(req, res) => {
  try {
    const userData = await User.findAll();

    res.status(200).json(userData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

// GET single user by ID
router.get('/:id', async(req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);

    if (!userData) {
      res
        .status(404)
        .json({ message: 'No user found with this ID' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// CREATE new user
router.post('/', async(req, res) => {
  try {
    const userData = await User.create({
      ...req.body
    });

    // save the session
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// login route
router.post('/login', async(req, res) => {
  try {
    const userData = await User.findOne({ 
      where: { 
        email: req.body.email 
      } 
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'No username found, please try again' });
      return;
    }

    // check if password is correct
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    // save the session
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// logout route
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    console.log(err);
    res.status(404).end();
  }
});

module.exports = router;