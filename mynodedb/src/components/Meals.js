import React, { Component } from "react";
//import Meal from "./Meal";
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
            <h1> Meals</h1>
               
            </div>
        );
    }

}



