import React, { Component } from 'react';
import axios from 'axios';

import './Converter.scss';
import ConvertFrom from './ConvertFrom/ConvertFrom';
import ConvertTo from './ConvertTo/ConvertTo';
import UserAmount from './UserAmount/UserAmount';
import Exchanged from './Exchanged/Exchanged';

const endpoint = 'http://data.fixer.io/api/latest?access_key=5a2ff4e388922e1ed2fbd3867287f641';

export default class Converter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: '', 
            currencyFrom: 'RON',
            currencyTo: 'USD', 
            exchangedValue: '', 
            userValue: '', 
        };
    }

    componentDidMount() {
        this.getCurrencyValues();
    }

    getCurrencyValues = () => {
        axios.get(endpoint)
            .then(results => this.setState({ currency: results.data.rates, }))
            .catch(error => console.error(error))
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    handleUserInput = (value) => {
        this.setState({ userValue: value, })
    }

    handleFrom = (event) => {
        this.setState({
            currencyFrom: event.target.value,
        });
    }

    handleTo = (event) => {
        this.setState({
            currencyTo: event.target.value,
        });
    }

    render() {
        const { userValue } = this.state;
        return (
            <form name="converter" className="converter" onSubmit={this.handleSubmit}>
                <ConvertFrom {...this.state} handleFrom={this.handleFrom} />
                <ConvertTo {...this.state} handleTo={this.handleTo} />
                <Exchanged val={userValue} onUpdate={this.handleUserInput} {...this.state} handleFrom={this.handleFrom} handleTo={this.handleTo} />
                <UserAmount val={userValue} onUpdate={this.handleUserInput} />
            </form>
        )
    }
}
