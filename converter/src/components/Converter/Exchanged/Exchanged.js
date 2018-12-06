import React, { Component } from 'react';

export default class Exchanged extends Component {
    constructor(props) {
        super(props);
        this.exchangeValue = React.createRef();
    }

    componentDidMount() {
        const refElement = this.exchangeValue.current;
        if (refElement) {
            console.log(refElement)
        }
    }

    handleUpdateValueE = (event) => {
        this.props.onUpdate(event.target.value);
    }

    render() {
        const { currency, currencyTo, currencyFrom, userValue } = this.props;
        return (
            <div className="converter__exchanged">
                <div onChange={this.handleUpdateValueE} className="display-value">
                    {
                        currencyFrom && 
                        Object.keys(currency).map((key) => (
                            (key && currencyFrom === key) &&
                            <div className="display-value__from" key={key} ref={this.exchangeValue}>{currencyFrom} {currency[key] * userValue}</div>
                        ))
                    }
                    {
                        currencyTo && 
                        Object.keys(currency).map((key) => (
                            (key && currencyTo === key) &&
                            <div className="display-value__to" key={key} ref={this.exchangeValue}>{currencyTo} {currency[key] * userValue}</div>
                        ))
                    }
                </div>
            </div>
        );
    }
}
