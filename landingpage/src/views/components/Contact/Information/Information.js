import React, { Component } from 'react';
import './Information.css';

export default class Information extends Component {
    render() {
        return (
            <div className="information">
                <div className="information-person">
                    <h3 className="information-person__name">Tudor Suhan</h3>
                    <span className="information-person__phone">0740 104 540</span>
                </div>
                <div className="information-person">
                    <h3 className="information-person__name">Email</h3>
                    <span className="information-person__phone">hello@devio.ro</span>
                </div>
            </div>
        );
    }
}
