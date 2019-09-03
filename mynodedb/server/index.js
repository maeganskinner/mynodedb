// THIS IS YOUR SERVER
const express = require("express");
const app = express();
const mealController = require("./controllers/mealController");


app.use(express.json());


app.get("/api/meals", mealController.getMeals);
app.get("/api/pastMeals", mealController.getPastMeals);
app.post("/api/addMeal", mealController.addMeal);
app.delete("/api/meal/:id", mealController.deleteMeal);


app.listen(5050, () => {
  console.log("Listening on port 5050");
});
