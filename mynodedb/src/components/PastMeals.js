import React from 'react';
import "./Meal.css";



export default class PastMeal extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            selected: false
        };
    }
    render () {
        return (
            <div>
                <h1 className="name"> {this.props.name} </h1>
                <img className="image" src={this.props.image} 
                />
            </div>
        );
    }
}
    