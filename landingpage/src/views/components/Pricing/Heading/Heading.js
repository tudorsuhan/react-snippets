import React, { Component } from 'react';
import './Heading.css';

export default class Heading extends Component {
    render() {
        return (
            <div className="section-head sh-pricing">
                <div className="heading">
                    <h2 className="heading--title title-pricing">Pricing</h2>
                    <p className="heading--subtitle subtitle-pricing">Pricing methodology</p>
                </div>
            </div>
        );
    }
}