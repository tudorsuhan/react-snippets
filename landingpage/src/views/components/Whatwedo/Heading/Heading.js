import React, { Component } from 'react';
import './Heading.css';

export default class Heading extends Component {
    render() {
        return (
            <div className="section-head sh-wwd">
                <div className="heading">
                    <h2 className="heading--title title-wwd">What we do</h2>
                    <p className="heading--subtitle subtitle-wwd">Vision</p>
                </div>
            </div>
        );
    }
}
