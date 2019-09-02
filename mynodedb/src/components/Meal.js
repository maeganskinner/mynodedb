// THIS IS HOW YOUR MEAL BEHAVES
import React from 'react';
import "./Meal.css";


// takes in props
export default class Meal extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            selected: false
        };
    }
    render () {
        return ( 
            <div key={this.props.index}>
                <h1 className="name"> {this.props.name} </h1>
                <img className="image" src={this.props.image} 

                />
            </div>
        );
    }
}
    