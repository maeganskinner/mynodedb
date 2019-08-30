// THIS IS YOUR SERVER
const express = require("express");
const app = express();
const mealController = require("./controllers/mealController");


app.use(express.json());


app.get("/api/meals", mealController.getMeals);


app.listen(5050, () => {
  console.log("Listening on port 5050");
});
