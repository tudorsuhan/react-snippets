import React, { Component } from 'react';
import Date from './Date/Date';
import './Header.scss';

export default class Header extends Component {

    render() {
        return (
            <header className="converter-header">
                <h1 className="converter-header__h1">Currency Converter</h1>
                <Date />
            </header>
        )
    }
}
