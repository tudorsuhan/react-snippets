import React, { Component } from 'react';
import './Burger.css';

export default class Burger extends Component {
    render() {
        return (
            <div className="burger" {...this.props}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        )
    }
}


