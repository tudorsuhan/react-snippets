import React, { Component } from 'react';
import './Heading.css';

export default class Heading extends Component {
    render() {
        return (
            <div className="section-head sh-technologies">
                <span className="line-before line-before--technologies"></span>
                <div className="heading">
                    <h2 className="heading--title title-technologies">Technologies</h2>
                    <p className="heading--subtitle subtitle-technologies">Technologies we use</p>
                </div>
            </div>
        );
    }
}
