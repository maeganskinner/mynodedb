import React from "react";
import "../App.css";

//props inside curley brackets
export default function Header() {
  return (
    <header>
      <div className="container">
        <h1 className="jumbotron">
          <strong>Meal Prep Me!</strong>
        </h1>
      </div>
      <div>
        <p>
          Deciding what to make during meal prepping can be hard.
        </p>
      </div>
      <p>
        Luckily for you, we compile a list of easy to make foods to help make your decison easier.
      </p>
    </header>
  );
}
