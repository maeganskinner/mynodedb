
const meals = [
  {
    name: "Black Bean and Corn Salad",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/8/22/0/VB0109H_Grilled-Corn-and-Bean-Salad_s4x3.jpg.rend.hgtvcom.826.620.suffix/1440430425179.jpeg"
  },
  {
    name: "Bacon Wrapped Egg Cup",
    image: "https://fitfoodiefinds.com/wp-content/uploads/2018/05/bacon-baked-eggs-new.jpg"
  },

  {
    name: "Grilled Salmon and Pineapple Salsa",
    image: "https://hips.hearstapps.com/del.h-cdn.co/assets/16/21/1600x1066/gallery-1464202521-delish-grilled-salmon-pineapple-salsa.jpg"
  },

  {
    name: "Tuna Egg Salad",
    image: "https://www.wholesomeyum.com/wp-content/uploads/2019/04/wholesomeyum-tuna-egg-salad-recipe-2.jpg"
  },

  {
    name: "Zucchini Lasagna",
    image: "https://www.jocooks.com/wp-content/uploads/2013/11/zucchini-lasagna-1-1.jpg"
  }
];

const pastMeals = [
  {
    name: "Crockpot Chicken Chili",
    image:
      "https://fitfoodiefinds.com/wp-content/uploads/2018/11/chili2.jpg"
  },
  {
    name: "Honey Ginger Chicken Stir Fry",
    image:
      "https://fitfoodiefinds.com/wp-content/uploads/2018/02/squaregingerbowls-600x600.png"
  },
  {
    name: "Southwest Chicken Casserole",
    image:
      "https://fitfoodiefinds.com/wp-content/uploads/2014/01/square-600x600.png"
  },
  {
    name: "Vegan Pasta Bake with White Wine Sauce",
    image:
      "https://fitfoodiefinds.com/wp-content/uploads/2019/02/PASTA-2-2-600x600.jpg"
  },
  {
    name: "Mederteraninan Vegan Buddah Bowl Recipe",
    image:
      "https://fitfoodiefinds.com/wp-content/uploads/2019/01/med-buddha-bowl-2-sq-600x600.jpg"
  }

]





const addMeal = (req, res) => {
  meals.push(req.body);
  res.json(meals);
}

const getMeals = (req, res) => {
  res.json(meals);
};

const getPastMeals = (req, res) => {
  meals.push(req.body);
  res.json(pastMeals);
};

const deleteMeal = (req, res) => {
  meals.splice(+req.params.id, 1);
  res.json(meals);
};

module.exports = {
  getMeals,
  getPastMeals,
  addMeal,
  deleteMeal
}