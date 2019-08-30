import React, { Component } from "react";
import Meal from "./Meal.js";
import axios from "axios";

export default class Meals extends Component {
    constructor() {
        super();
        this.state = {
            meals: []
        };
    }
    //component did mount method here, then render, then return
    componentDidMount() {
        axios
            .get("/api/meals")
            .then(response => {
                this.setState({ meals: response.data });
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        return (
            <div>
                {this.state.meals.map((meal, index) => (
                    <Meal
                        name={meal.name}
                        image={meal.image}
                        index={index}
                    />
                ))}
            </div>
        );
    }
}