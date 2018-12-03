import React, { Component } from 'react';
import './Heading.css';

export default class Heading extends Component {
    render() {
        return (
            <div className="section-head sh-clients">
                <div className="heading">
                    <h2 className="heading--title title-clients">Clients</h2>
                    <p className="heading--subtitle subtitle-clients">What projects we have worked on</p>
                </div>
            </div>
        );
    }
}
