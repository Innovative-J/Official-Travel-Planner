const Sequelize = require('sequelize'); // Import the Sequelize library
require('dotenv').config(); // Load environment variables from a .env file

// Create a new Sequelize instance based on whether a database URL is provided in the environment variables
const sequelize = process.env.DB_URL
? new Sequelize(process.env.DB_URL) // If DB_URL is defined, use it to connect
: new Sequelize( // Otherwise, use individual database parameters from environment variables
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'postgres',
    }
  );

module.exports = sequelize;
