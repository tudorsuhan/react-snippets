import React, { Component } from 'react';
import Button from '../../components/Button/Button';

export default class Operations extends Component {

    handleOperators(operator) {
        switch(operator) {
            case '+': 
            case '-': 
            case '*': 
            case '/': 
                this.props.addToCalculation(operator);
                break;
            case '=': 
                this.props.calculationResult(operator);
                break;
            default: 
                console.log('Something went wrong...');
        }
    }

    render() {
        return(
            <div className="calculator__operations">
                {
                    this.props.operations.map((operation, id) => {
                        return <Button className="button button__operations" button={operation} key={id} handleOperators={this.handleOperators.bind(this)} />;
                    })
                }
            </div>
        );
    }
}