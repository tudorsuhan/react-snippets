import React, { Component } from 'react';

export default class Button extends Component {

    handleClick(e) {
        // Conditional to handle different types of buttons
        switch(this.props.button) {
            case 0:
            case 1: 
            case 2: 
            case 3: 
            case 4: 
            case 5:
            case 6: 
            case 7: 
            case 8: 
            case 9: 
                this.props.handleNumbers(this.props.button);
                break;
            case 'c': 
            case '±': 
            case '.': 
                this.props.handleFunctions(this.props.button);
                break;
            case '+': 
            case '-': 
            case '*': 
            case '/': 
            case '=': 
                this.props.handleOperators(this.props.button);
                break;
            default: 
                console.log('Something went wrong...');
        }
    }

    render() {
        return(
            <button name={this.props.button} onClick={this.handleClick.bind(this)}>
                {this.props.button}
            </button>
        )
    }
}