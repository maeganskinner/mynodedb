import React from 'react';
import "./App.css";
import Header from "./components/Header";
import Meals from "./components/Meals";
import AddMeal from "./components/AddMeal"
import axios from "axios"

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      meals: []
    }
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
    console.log(this.state)
    return (
      <div>
        <Header />
        <nav>
          <button type="button" className="btn btn-primary btn-lg">
            Past Meals
        </button>
        </nav>
        <div>
          <Meals />
        </div>



        <nav>
          <div className="btn-group">

            <button onClick={() => this.setState({ section: "add" })}type="button" className="btn btn-primary btn-lg">
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