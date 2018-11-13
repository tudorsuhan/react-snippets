import React, { Component } from 'react';
import './Services.css';
import Heading from './Heading/Heading.js';
import Cards from './Cards/Cards.js';

export default class Services extends Component {
    render() {
        return (
            <section className="section section--services">
                <div className="wrapper">
                    <div className="services">
                        <Heading />
                        <Cards />
                    </div>
                </div>
            </section>
        );
    }
}
