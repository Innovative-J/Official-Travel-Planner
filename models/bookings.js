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
      type: DataTypes.STRING, // Define the flights attribute as a string
      allowNull: false, // The flights attribute cannot be null
    },
    itinerary: {
      type: DataTypes.STRING, // Define the itinerary attribute as a string
      allowNull: false, // The itinerary attribute cannot be null
      unique: true, // Ensure the itinerary is unique
      validate: {
        isEmail: true, // Validate that the itinerary is in email format (this might need to be adjusted based on actual requirements)
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
