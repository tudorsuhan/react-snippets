import React, { Component } from 'react';
import './Whatwedo.css';
import Heading from './Heading/Heading.js';
import Content from './Content/Content.js';

export default class Whatwedo extends Component {
    render() {
        return (
            // What We Do
            <section className="section section--whatwedo">
                <div className="wrapper">
                    <Heading />
                    <Content />
                </div>
            </section>
        );
    }
}
