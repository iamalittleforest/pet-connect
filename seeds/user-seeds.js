// import User model
const { User } = require('../models');

const userData = [
  {
    location: 'Lake Forest',
    age: '35',
    email: 'iamalittleforest@gmail.com',
    username: 'iamalittleforest',
    password: 'password1'
  },
  {
    location: 'Costa Mesa',
    age: '27',
    email: 'j.e.diaz@icloud.com',
    username: 'HardJumper',
    password: 'test1234'
  },
  {
    location: 'Irvine',
    age: '23',
    email: 'omri.ronen4@gmai.com',
    username: 'oms_ronen',
    password: 'password'
  },
  {
    location: 'Anaheim',
    age: '40',
    email: 'dude4@fake.com',
    username: 'dude',
    password: '123'
  },
  {
    location: 'Santa Ana',
    age: '30',
    email: 'mrfake@fake.com',
    username: 'fake',
    password: '1234'
  },
  {
    location: 'Laguna Beach ',
    age: '42',
    email: 'fakemail@fake.com',
    username: 'beachlover',
    password: 'ocean'
  },
];

// create and insert multiple Users using userData
const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true
  });

module.exports = seedUsers;