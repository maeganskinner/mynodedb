
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
        image: "https://hips.hearstapps.com/del.h-cdn.co/assets/16/21/1600x1066/gallery-1464202521-delish-grilled-salmon-pineapple-salsa.jpg?resize=768:*"
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
  
  
  const getMeals = (req, res) => {
    res.json(meals);
  };
  
  
  module.exports = {
      getMeals
  }