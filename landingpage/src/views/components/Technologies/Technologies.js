import React, { Component } from 'react';
import './Technologies.css';
import Cards from './Cards/Cards.js';
import Heading from './Heading/Heading.js';
import HugeText from './HugeText/HugeText.js';

export default class Technologies extends Component {
    render() {
        return (
            <section className="section">
                <div className="wrapper">
                    <HugeText />
                    <Heading />
                    <Cards />
                </div>
            </section>
        );
    }
}
