const express = require("express");
const groceriesRoute = require("../router/groceries");
const marketsRoute = require("../router/markets");
const app = express();
const PORT = 3000;

app.use(express.json()); //middleware to get request body

app.use((req, res, next) => {
  console.log(`${req.method}:${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

//app.use(groceriesRoute);
app.use("/groceries", groceriesRoute);
app.use(marketsRoute);
app.listen(3000, () => {
  console.log(`Running Express Server on Port ${PORT}`);
});

// const groceryList = [
//   {
//     item: "milk",
//     quantity: 2,
//   },
//   {
//     item: "cereal",
//     quantity: 1,
//   },
//   {
//     item: "oats",
//     quantity: 4,
//   },
// ];

// app.get("/groceries", (req, res) => {
//   res.send(groceryList);
// });

// app.get("/groceries/:item", (req, res) => {
//   const { item } = req.params;
//   //console.log(item);
//   const groceryItem = groceryList.find((g) => g.item === item);
//   //console.log(groceryItem);
//   if (!groceryItem) {
//     res.send(`${item} not in Grocery List`);
//     return;
//   }
//   res.send(groceryItem);
// });

// app.post("/groceries", (req, res) => {
//   console.log(req.body);
//   groceryList.push(req.body);
//   res.sendStatus(201);
// });
