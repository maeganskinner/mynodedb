import React from 'react';
import "./App.css";
import Header from "./components/Header";
import Meals from "./components/Meals";


function App() {
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
      



    </div>


  </div>
  );
}

export default App;

