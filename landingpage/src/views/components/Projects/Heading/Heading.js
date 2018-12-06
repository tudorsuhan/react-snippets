import React, { Component } from 'react';
import './Heading.css';

export default class Heading extends Component {
    render() {
        return (
            <div className="section-head sh-projects">
                <div className="heading">
                    <h2 className="heading--title title-projects">Projects</h2>
                    <p className="heading--subtitle subtitle-projects">What projects we have worked on</p>
                </div>
            </div>
        );
    }
}
