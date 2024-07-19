const { Model, DataTypes } = require("sequelize"); // Import Sequelize's Model and DataTypes
const bcrypt = require("bcrypt"); // Import bcrypt for password hashing
const sequelize = require("../config/connection"); // Import the Sequelize connection instance


class Booking extends Model {}

Booking.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
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
