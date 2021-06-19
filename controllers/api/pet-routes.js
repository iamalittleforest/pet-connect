// import routes and models
const router = require("express").Router();
const { Comment, Pet, Post, User } = require("../../models");

// GET all pets
router.get("/", async (req, res) => {
    try {
        const petData = await Pet.findAll({
            include: [
                {
                    model: User,
                },
            ],
        });
        const petArr = petData.map((pets) => pets.get({ plain: true }));
        res.render('', {
            pets,
            loggedIn: req.session.loggedIn
     })
 } catch (err) {
        console.log(err)
        res.status(500).json(err)
 }
});
    

// GET single pet by ID
router.get("/:id", async (req, res) => {
  try {
      const petData = await Pet.findByPk(req.params.id, {
        // Can change if not needed later.
          include: [
          {
            model: User,
          },
          ],
        });
        
        if(!petData) {
            res.status(404).json({ message: "No pet with that ID was found" });
            return;
        }
        res.status(200).json(petData)
      
  } catch (err) {
      console.log(err);
      res.status(500).json(err)
  }
});

// CREATE new pet
router.post("/", async (req, res) => {
  try {
      const petData = await Pet.create({
        name: req.body.name,
        species: req.body.species,
        breed: req.body.breed,
        gender: req.body.gender,
        age: req.body.age,
      });
      req.session.save(() => {
          req.session.loggedIn = true;

          res.status(200).json(petData)
      });
      
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
      
  }
});

// UPDATE pet by ID
router.put("/:id", async(req, res) => {
    try {
        const petData = await Pet.update(req.body, {
            where: {
                id: req.params.id
            },
        });
        if (!petData) {
            res.status(404).json({ message: "No ID was found" });
            return;
        }
        res.json(petData);
  } catch (err) {
        console.log(err);
        res.status(500).json(err)
  }
});

// DELETE pet by ID
router.delete("/:id", async (req, res) => {
    
    try {
        const petData = await Pet.destroy({
            where: {
                id: req.params.id,
            }
        });
        if (!petData) {
            res.status(404).json({ message: "No ID found" });
        }
        res.status(200).json(petData)
        
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
