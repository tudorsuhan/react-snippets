import React, { Component } from 'react';
import './Heading.css';

export default class Heading extends Component {
    render() {
        return (
            <div className="section-head sh-services">
                <div className="heading">
                    <h2 className="heading--title title-services">Services</h2>
                    <p className="heading--subtitle subtitle-services">This is what we are good at</p>
                </div>
            </div>
        );
    }
}
