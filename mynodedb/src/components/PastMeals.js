import React, { Component } from "react";
import "./Meal.css";
import axios from "axios"



export default class PastMeal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        };
    }
    render() { 
        return (
            <div
                onClick={() => {
                    this.setState({ selected: !this.state.selected });
                }}

            >
                <div key={this.props.index}>
                    <h1 className="name"> {this.props.name} </h1>
                    <img className="image" src={this.props.image} />
                    
                </div>
            </div>
        );
    }
}