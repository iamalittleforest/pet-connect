const sequelize = require('../config/connection');
const seedUser = require('./user-seeds');
const seedPet = require('./pet-seeds');
const seedPost = require('./post-seeds');
const seedComment = require('./comment-seeds');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPet();

  await seedPost();

  await seedComment();

  process.exit(0);
};

seedAll();
