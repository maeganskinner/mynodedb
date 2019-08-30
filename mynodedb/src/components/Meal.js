// THIS IS HOW YOUR MEAL BEHAVES
import React from 'react';
//import "./Meal.css";
import axios from "axios";

// takes in props
export default class Meal extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            selected: false
        };
    }

}
    