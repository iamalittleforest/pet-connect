// import Pet model
const { Pet } = require('../models');

const petData = [
  {
    id: 1,
    name: 'Kiba',
    species: 'Dog',
    breed: 'Shiba Inu',
    gender: "Male",
    age: 8,
    user_id: 1
  },
  {
    id: 2,
    name: 'Haku',
    species: 'Dog',
    breed: 'Shiba Inu',
    gender: "Male",
    age: 10,
    user_id: 1
  },
  {
    id: 3,
    name: 'Maple',
    species: 'Cat',
    breed: 'Domestic Short Hair',
    gender: "Female",
    age: 6,
    user_id: 1
  },
  {
    id: 4,
    name: 'Faye',
    species: 'Dog',
    breed: 'Husky Mix',
    gender: "Female",
    age: 2,
    user_id: 2
  },
  {
    id: 5,
    name: 'James',
    species: 'Cat',
    breed: 'Domestic Short Hair',
    gender: "Male",
    age: 5,
    user_id: 3
  },
  {
    id: 6,
    name: 'Jackson',
    species: 'Cat',
    breed: 'Domestic Long Hair',
    gender: "Male",
    age: 5,
    user_id: 3
  },
  {
    id: 7,
    name: 'Dave',
    species: 'Dog',
    breed: 'Pit Bull',
    gender: "Male",
    age: 5,
    user_id: 4
  },
  {
    id: 8,
    name: 'Dojo',
    species: 'Dog',
    breed: 'Labrador',
    gender: "Male",
    age: 10,
    user_id: 5
  },
  {
    id: 9,
    name: 'Layla',
    species: 'Cat',
    breed: 'Domestic Short Hair',
    gender: "Female",
    age: 5,
    user_id: 6
  },
];

// create and insert multiple Pets using petData
const seedPets = () => Pet.bulkCreate(petData);

module.exports = seedPets;