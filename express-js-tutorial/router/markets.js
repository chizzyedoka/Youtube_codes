const { Router } = require("express");
const router = Router();

const superMarkets = [
  {
    id: 1,
    store: "ShopRite",
    miles: 200,
  },
  {
    id: 2,
    store: "WallMart",
    miles: 100,
  },
  { id: 3, store: "Whole Foods", miles: 50 },
];

//query parameters
router.get("/markets", (req, res) => {
  //console.log(`Queries are ${req.query}`);
  let { miles } = req.query;
  console.log(req.query);

  const parsedMiles = parseInt(miles);

  if (!isNaN(parsedMiles)) {
    const filteredStores = superMarkets.filter((s) => s.miles <= parsedMiles);
    console.log(filteredStores);
    res.send(filteredStores);
    return;
  }
  res.send(superMarkets);
});

module.exports = router;
