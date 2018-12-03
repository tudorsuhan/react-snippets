import React, { Component } from 'react';
import Button from '../../components/Button/Button';

export default class Functions extends Component {

    handleFunctions(funct) {
        // Conditional to call appropiate function
        switch(funct) {
            case 'c': 
                this.props.clearValues();
                break;
            case '±': 
                this.props.swapSign();
                break;
            case '.': 
                this.props.insDecimal();
                break;
            default: 
                console.log('Something went wrong...');
        }
    }

    render() {
        return(
            <div className="calculator__functions">
                {
                    this.props.functions.map((funct, id) => {
                        return(
                            <Button className="button button__functions" button={funct} key={id} handleFunctions={this.handleFunctions.bind(this)} />
                        );
                    })
                }
            </div>
        );
    }
}