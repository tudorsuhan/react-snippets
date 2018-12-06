import React, { Component } from 'react';
import './Content.css';

export default class Content extends Component {
    render() {
        return (
            <div className="section-content sc-pricing">
                <p className="paragraph p-pricing">
                    TC was founded out of a desire to solve problems through coding. 
                    We cut our fingers working in the IT industry for <span>6 years</span> before we started this company. 
                </p>
            </div>
        );
    }
}