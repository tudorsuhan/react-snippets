import React, { Component } from 'react';
import './Clients.css';
import Cards from './Cards/Cards.js';
import Heading from './Heading/Heading.js';

export default class Clients extends Component {
    render() {
        return (
            <section className="section section--clients">
                <div className="wrapper">
                    <Heading />
                    <Cards />
                </div>
            </section>
        );
    }
}
