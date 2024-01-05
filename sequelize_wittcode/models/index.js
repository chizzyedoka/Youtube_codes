const { Sequelize, INTEGER } = require("sequelize");
const dbConfig = require("../config/dbConfig");

const sequelize = new Sequelize({
  database: dbConfig.DATABASE,
  username: dbConfig.USER,
  password: dbConfig.PASSWORD,
  dialect: dbConfig.DIALECT,
  host: dbConfig.HOST,
});

const User = sequelize.define(
  "user",
  {
    userId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [5, 10],
      },
    },
    age: {
      type: Sequelize.INTEGER,
      defaultValue: 18,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const Student = sequelize.define(
  "student",
  {
    student_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [4, 20],
      },
    },
    favorite_class: {
      type: Sequelize.STRING,
      defaultValue: "Computer Science",
    },
    school_year: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    subscribed_to_wittcode: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  },
  { timestamps: false }
);

module.exports = {
  sequelize,
  User,
  Student,
};
