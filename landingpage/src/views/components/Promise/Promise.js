import React, { Component } from 'react';
import './Promise.css';
import Cards from './Cards/Cards.js';
import Heading from './Heading/Heading.js';

export default class Promise extends Component {
    render() {
        return (
            <section className="section section--promise">
                <div className="wrapper">
                    <Heading />
                    <Cards />
                </div>
            </section>
        );
    }
}
