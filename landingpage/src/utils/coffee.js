import React, { Component } from 'react';

export default class MorningCoffee extends Component {

    defaultState = {
        coffee: false,
        cup: 'empty',
        fill: false,
        coffeeType: undefined
    }

    constructor(props) {
        super(props);
        this.state = this.defaultState;
    }

    fillCoffeeCup = () => {
        if( typeof coffeeType !== undefined ) {
            this.setState({
                coffee: true,
                cup: 'filled',
                fill: true,
                coffeeType: 'Espresso'
            })
        }
        console.log(`Remove the cup! Enjoy your ${coffeeType}`);
    }

    render() {
        return (
            <button onClick={this.fillCoffeeCup}>Select Coffee!</button>
        );
    }
}










