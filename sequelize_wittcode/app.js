const express = require("express");
const { sequelize, User, Student } = require("./models/index");

const app = express();

// For POST request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(8000, () => {
  console.log("Listening on port 8000");
});

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("connected to database succesfully");
  })
  .then(() => {
    // const user = User.build({
    //   username: "chizzy",
    //   password: "1234",
    //   age: 23,
    // });
    // user.save(); no need for this when using create method
    // console.log(user.username);
    const user = {
      username: "Nonso",
      password: "123456",
      age: 19,
    };
    User.create(user);
  })
  // .then(() => {
  //   const students = Student.bulkCreate(
  //     [
  //       {
  //         name: "chizzy",
  //         favorite_class: "communications",
  //         school_year: 2024,
  //         subscribed_to_wittcode: false,
  //       },
  //       {
  //         name: "tola",
  //         school_year: 2024,
  //       },
  //       {
  //         name: "franklin",
  //         school_year: 2023,
  //       },
  //     ],
  //     { validate: true }
  //   );
  //   return students;
  // })
  .then((data) => {
    console.log(JSON.stringify(data));
  })
  .then(() => {})
  .catch((err) => {
    console.error(err);
  });

// user.save();
