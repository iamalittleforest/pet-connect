// import User model
const { User } = require('../models');

const userData = [
  {
    id: 1,
    username: 'iamalittleforest',
    location: 'Lake Forest',
    age: '35',
    email: 'iamalittleforest@gmail.com',
    password: 'password1'
  },
  {
    id: 2,
    username: 'HardJumper',
    location: 'Costa Mesa',
    age: '27',
    email: 'j.e.diaz@icloud.com',
    password: 'test1234'
  },
  {
    id: 3,
    username: 'oms_ronen',
    location: 'Irvine',
    age: '23',
    email: 'omri.ronen4@gmail.com',
    password: 'password'
  },
  {
    id: 4,
    username: 'dude',
    location: 'Anaheim',
    age: '40',
    email: 'dude4@fake.com',
    password: '123456789'
  },
  {
    id: 5,
    username: 'fake',
    location: 'Santa Ana',
    age: '30',
    email: 'mrfake@fake.com',
    password: '12345678'
  },
  {
    id: 6,
    username: 'beachlover',
    location: 'Laguna Beach ',
    age: '42',
    email: 'fakemail@fake.com',
    password: 'ocean1234'
  },
];

// create and insert multiple Users using userData
const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true
  });

module.exports = seedUsers;