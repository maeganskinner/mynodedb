import React from 'react';
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Meals from "./components/Meals";
import AddMeal from "./components/AddMeal";
import PastMeals from "./components/PastMeals";
import axios from "axios"

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      meals:
        name: "",
        image: "",
        index: ""
    };
  }


  componentDidMount() {
    axios
      .get("/api/meals")
      .then(response => {
        this.setState({ meals: response.data })
      })
      .catch(error => console.log(error))
  }
  render() {
    return (
      <div>
        <Header />
        <Body />
        <nav>
          <button onClick={() => this.setState({ section: "PastMnomdemoneals" })} type="button" className="btn btn-primary btn-lg">
            Past Meals
            <PastMeals />
          </button>
        </nav>
        <div>
          <div>
            {this.state.meals.map((meal, index) =>
              <Meal
                name={meal.name}
                image={meal.image}
                index={index}
              />
            )}
          </div>
        </div>



        <nav>
          <div className="btn-group">

            <button onClick={() => this.setState({ section: "add" })} type="button" className="btn btn-primary btn-lg">
              Add a Meal
            </button>

            <button type="button" className="btn btn-primary btn-lg">
              Delete a Meal
            </button>
          </div>
        </nav>
        {this.state.section === "add" ? (
          <AddMeal changeSection={() => this.setState({ section: "meals" })} />
        ) : null}

      </div>
    );
  }
}