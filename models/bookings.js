const { Model, DataTypes } = require("sequelize"); // Import Sequelize's Model and DataTypes
const bcrypt = require("bcrypt"); // Import bcrypt for password hashing
const sequelize = require("../config/connection"); // Import the Sequelize connection instance


// Define the Booking model extending Sequelize's Model
class Booking extends Model {}

// Initialize the Booking model with its attributes and options
Booking.init(
  {
    id: {
      type: DataTypes.INTEGER, // Define the id attribute as an integer
      allowNull: false, // The id cannot be null
      primaryKey: true, // Set id as the primary key
    },

    flights: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    itinerary: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
  },
  {
    hooks: {},
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
