// import database connection
const sequelize = require('../config/connection');

// import seed files
const seedUser = require('./user-seeds');
const seedPet = require('./pet-seeds');
const seedPost = require('./post-seeds');
const seedComment = require('./comment-seeds');

// seed all data
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');

  await seedPet();
  console.log('\n----- PETS SEEDED -----\n');

  await seedPost();
  console.log('\n----- POSTS SEEDED -----\n');

  await seedComment();
  console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();
