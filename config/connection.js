// load environment variables
require('dotenv').config();

// include Sequelize module
const Sequelize = require('sequelize');

// create sequelize instance
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, 
    {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      }
    }
  );

module.exports = sequelize;