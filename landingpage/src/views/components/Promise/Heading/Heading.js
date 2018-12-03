import React, { Component } from 'react';
import './Heading.css';

export default class Heading extends Component {
    render() {
        return (
            <div className="section-head sh-promise">
                <div className="heading">
                    <h2 className="heading--title title-promise">Our promise</h2>
                    <p className="heading--subtitle subtitle-promise">As part of our high quality service, we'd like to offer something extra too.</p>
                </div>
            </div>
        );
    }
}
