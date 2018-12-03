import React, { Component } from 'react';

import Display from './components/Display/Display';
import Functions from './logic/Functions/Functions';
import Numbers from './logic/Numbers/Numbers';
import Operations from './logic/Operations/Operations';

export default class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            displayValues: '0',
            calculateValues: []
        }
    }

    /**
     * Display number
     * @param {int} num 
     */
    displayNumber(num) {
        // Where value too long for display
        if(this.state.displayValues.length > 19) {
            return;
        // Where value is 0 or result is undefined
        } else if(this.state.displayValues === '0' || this.state.displayValues === 'Undefined! 😫') {
            this.setState({
                displayValues: num
            });
        // Fix: to allow user to add '-' sign while displayed value is still 0
        } else if(this.state.displayValues.charAt(0) === '_' && this.state.displayValues.charAt(1) === '0') {
            this.setState({
                displayValues: `-${num}`
            });
        } else {
            this.setState({
                displayValues: this.state.displayValues + num
            });
        }
    }

    /**
     * Clear value
     */
    clearValues() {
        this.setState({
            displayValues: '0',
            calculateValues: []
        });
    }

    /**
     * Decimat format
     */
    insDecimal() {
        if(this.state.displayValues.length > 19) {
            return;
        } else if(this.state.displayValues.indexOf('.') === -1) {
            this.setState({
                displayValues: this.state.displayValues + '.'
            });
        } else {
            return;
        }
    }

    /**
     * Swap sign
     */
    swapSign() {
        const char = this.state.displayValues.charAt(0);
        if(char === '-') {
            this.setState({
                displayValues: this.state.displayValues.slice(1)
            });
        } else {
            this.setState({
                displayValues: '-' + this.state.displayValues
            });
        }
    }

    /**
     * Add to calculation
     * @param {symbol} operator 
     */
    addToCalculation(operator) {
        const currentValue = parseFloat(this.state.displayValues),
            calculation = {
                value: currentValue,
                sign: operator
            },
            values = [...this.state.calculateValues];
        values.push(calculation);
        this.setState({
            displayValues: '0',
            calculateValues: values
        });
    }

    /**
     * Calculation result
     * @param {symbol} operator 
     */
    calculationResult(operator) {
        const valuesToCalculate = [...this.state.calculateValues],
            currentValue = parseFloat(this.state.displayValues);
        let result = 0;
        // Add current value to array
        valuesToCalculate.push({
            value: currentValue,
            sign: operator
        });
        // For first iteration, set result = to first value
        for( let i = 0, x = valuesToCalculate.length; i < x; i++ ) {
            // This is so we can do sums between current and previous loop iteration
            if(i === 0) {
                result = valuesToCalculate[i].value;
            } else {
                // Referencing the previous iteration's sign
                switch(valuesToCalculate[i - 1].sign) {
                    case '+': 
                        result += valuesToCalculate[i].value;
                        break;
                    case '-':
                    result -= valuesToCalculate[i].value;
                        break;
                    case '*': 
                        result *= valuesToCalculate[i].value;
                        break;
                    case '/': 
                        result /= valuesToCalculate[i].value;
                        break;
                    default: 
                        console.log('Something went wrong...');
                }
            }
        }
        // Catch if user devides by 0
        if(isNaN(result) || result === Infinity) {
            result = 'Undefined! 😫';
        } else {
            result = result.toString();
        }
        // Set result on state
        this.setState({
            displayValues: result,
            calculateValues: []
        });
    }

    /**
     * Render
     */
    render() {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
            operations = ['+', '-', '*', '/', '='],
            functions = ['c', '±', '.'];

        return(
            <div className="calculator">
                <Display displayValues={this.state.displayValues} />
                <Functions 
                    functions={functions} 
                    clearValues={this.clearValues.bind(this)}
                    insDecimal={this.insDecimal.bind(this)}
                    swapSign={this.swapSign.bind(this)}
                />
                <Operations 
                    operations={operations} 
                    addToCalculation={this.addToCalculation.bind(this)} 
                    calculationResult={this.calculationResult.bind(this)}
                />
                <Numbers numbers={numbers} displayNumber={this.displayNumber.bind(this)} />
            </div>
        );
    }
}