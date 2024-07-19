const { Model, DataTypes } = require('sequelize'); // Import Sequelize's Model and DataTypes
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing
const sequelize = require('../config/connection'); // Import the Sequelize connection instance



// Define the User model extending Sequelize's Model
class User extends Model {
  // Method to check if the provided password matches the stored hashed password
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}


// Initialize the User model with its attributes and options
User.init(
  {
    id: {
      type: DataTypes.INTEGER, // Define the id attribute as an integer
      allowNull: false, // The id cannot be null
      primaryKey: true, // Set id as the primary key
      autoIncrement: true, // Enable auto-increment for the id
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6],
      },
    },
  },
  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
