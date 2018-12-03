import React, { Component } from 'react';
import './Heading.css';

export default class Heading extends Component {
    render() {
        return (
            <div className="section-head sh-story">
                <div className="heading">
                    <h2 className="heading--title title-story">Story</h2>
                    <p className="heading--subtitle subtitle-story">The begining</p>
                </div>
            </div>
        );
    }
}
