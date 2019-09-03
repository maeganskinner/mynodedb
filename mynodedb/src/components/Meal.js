// THIS IS HOW YOUR MEAL BEHAVES
import React from 'react';
import "./Meal.css";
//import axios from "axios";



// takes in props
export default class Meal extends React.Component {
    constructor() {
        super();
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