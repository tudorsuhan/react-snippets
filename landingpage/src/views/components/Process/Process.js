import React, { Component } from 'react';
import './Process.css';
import Cards from './Cards/Cards.js';
import Content from './Content/Content.js';
import Heading from './Heading/Heading.js';

export default class Process extends Component {
    render() {
        return (
            <section className="section section--process">
                <div className="wrapper">
                    <div className="heading-content">
                        <Heading />
                        <Content />
                    </div>
                    <Cards />
                </div>
            </section>
        );
    }
}
