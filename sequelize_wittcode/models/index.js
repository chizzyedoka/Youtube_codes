const { Sequelize, INTEGER } = require("sequelize");
const dbConfig = require("../config/dbConfig");

const sequelize = new Sequelize({
  database: dbConfig.DATABASE,
  username: dbConfig.USER,
  password: dbConfig.PASSWORD,
  dialect: dbConfig.DIALECT,
  host: dbConfig.HOST,
});

const User = sequelize.define("user", {
  userId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  age: {
    type: Sequelize.INTEGER,
    defaultValue: 18,
  },
});

module.exports = {
  sequelize,
  User,
};
