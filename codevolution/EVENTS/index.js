const PizzaShop = require("./pizza-shop");
const DrinkMachine = require("./drink-machine");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topping) => {
  console.log(`Order received: Baking a ${size} pizza with ${topping} added`);
  drinkMachine.serveDrink(size);
});
pizzaShop.order("large", "mushroom");
pizzaShop.displayOrderNumber();

// const EventEmitter = require("node:events");

// const emitter = new EventEmitter();

// emitter.on("order-pizza", () => {
//   console.log(`Order received: Baking a pizza`);
// });

// emitter.on("order-pizza", (size, toppings) => {
//   console.log(`Baked a ${size} pizza with ${toppings} added`);
// });

// emitter.emit("order-pizza", "large", "cheese");
