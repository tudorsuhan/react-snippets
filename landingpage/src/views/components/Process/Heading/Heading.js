import React, { Component } from 'react';
import './Heading.css';

export default class Heading extends Component {
    render() {
        return (
            <div className="section-head sh-process">
                <div className="heading">
                    <h2 className="heading--title title-process">Our process</h2>
                    <p className="heading--subtitle subtitle-process">Insights from methodology</p>
                </div>
            </div>
        );
    }
}
