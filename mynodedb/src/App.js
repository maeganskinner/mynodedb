import React from 'react';
import "./App.css";
import Header from "./components/Header";
import Meals from "./components/Meals";
import Axios from "axios"

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      meals: []
    }
  }
  
  componentDidMount(){
    Axios
      .get("/api/meals")
      .then(response => {
        this.setState({meals: response.data })
      })
      .catch(error => console.log(error))
  }
  render() {
    console.log(this.state)
    return (
      <div className="body">
        <Header />

        <div>
          <p>
            Deciding what to make during meal prepping can be hard.
              </p>
        </div>

        <p>
          Luckily for you, we compile a list of easy to make foods to help make your decison easier.
          </p>
        <br>
        </br>

        <nav>
          <button> Past Meals </button>
        </nav>

        <nav>
          <button> Add a Meal </button>
        </nav>


        <div>
          **Meals**
        <Meals />





        </div>


      </div>
    );

  }

}



