// import Pet model
const { Pet } = require('../models');

const petData = [
  {
    id: 1,
    name: 'Kiba',
    species: 'Dog',
    breed: 'Shiba Inu',
    gender: "male-neutered",
    age: 8,
    user_id: 1
  },
  {
    id: 2,
    name: 'Haku',
    species: 'Dog',
    breed: 'Shiba Inu',
    gender: "male-neutered",
    age: 10,
    user_id: 1
  },
  {
    id: 3,
    name: 'Maple',
    species: 'Cat',
    breed: 'Domestic Short Hair',
    gender: "female-spayed",
    age: 6,
    user_id: 1
  },
  {
    id: 4,
    name: 'Faye',
    species: 'Dog',
    breed: 'Husky Mix',
    gender: "female",
    age: 2,
    user_id: 2
  },
  {
    id: 5,
    name: 'James',
    species: 'Cat',
    breed: 'Domestic Short Hair',
    gender: "male",
    age: 5,
    user_id: 3
  },
  {
    id: 6,
    name: 'Jackson',
    species: 'Cat',
    breed: 'Domestic Long Hair',
    gender: "male",
    age: 5,
    user_id: 3
  },
  {
    id: 7,
    name: 'Dave',
    species: 'Dog',
    breed: 'Pit Bull',
    gender: "male",
    age: 5,
    user_id: 4
  },
  {
    id: 8,
    name: 'Dojo',
    species: 'Dog',
    breed: 'Labrador',
    gender: "male",
    age: 10,
    user_id: 5
  },
  {
    id: 9,
    name: 'Layla',
    species: 'Cat',
    breed: 'Domestic Short Hair',
    gender: "female",
    age: 5,
    user_id: 6
  },
];

// create and insert multiple Pets using petData
const seedPets = () => Pet.bulkCreate(petData);

module.exports = seedPets;