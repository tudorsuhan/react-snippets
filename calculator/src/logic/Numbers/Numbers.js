import React, { Component } from 'react';
import Button from '../../components/Button/Button';

export default class Numbers extends Component {

    handleNumbers(num) {
        const parsedNumber = num.toString();
        this.props.displayNumber(parsedNumber);
    }

    render() {
        return (
            <div className="calculator__numbers">
                {
                    this.props.numbers.map((number, id) => {
                        return <Button className="button button__numbers" button={number} key={id} handleNumbers={this.handleNumbers.bind(this)} />
                    })
                }
            </div>
        );
    }
}