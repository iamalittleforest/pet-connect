// import routes and models
const router = require("express").Router();
const { Pet } = require("../../models");

// import helper to prevent access unless user is logged in
const withAuth = require('../../utils/auth');

// GET all pets
router.get('/', async (req, res) => {
  try {
    const petData = await Pet.findAll();

    res.status(200).json(petData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
});
    
// GET single pet by ID
router.get('/:id', async (req, res) => {
  try {
    const petData = await Pet.findByPk(req.params.id);
        
    if(!petData) {
      res
        .status(404)
        .json({ message: 'No pet with this ID' });
      return;
    }

    res.status(200).json(petData)  
  } catch (err) {
      console.log(err);
      res.status(500).json(err)
  }
});

// CREATE new pet
router.post('/', withAuth, async (req, res) => {
  try {
    const petData = await Pet.create({
      ...req.body,
      user_id: req.session.user_id
    });

    res.status(200).json(petData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// UPDATE pet by ID
router.put('/:id', withAuth, async(req, res) => {
  try {
    const petData = await Pet.update(req.body, {
      where: {
        id: req.params.id
      },
    });

    if (!petData) {
      res
        .status(404)
        .json({ message: 'No pet with this ID' });
      return;
    }

    res.json(petData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

// DELETE pet by ID
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const petData = await Pet.destroy({
      where: {
        id: req.params.id,
      }
    });

    if (!petData) {
      res
        .status(404)
        .json({ message: 'No pet with this ID' });
      return;
    }

    res.status(200).json(petData)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;