import React, { Component } from 'react';
import './Story.css';
import Content from './Content/Content.js';
import Heading from './Heading/Heading.js';
import HugeText from './HugeText/HugeText.js';

export default class Story extends Component {
    render() {
        return (
            <section className="section section--story">
                <div className="wrapper">
                    <HugeText />
                    <Heading />
                    <Content />
                </div>
            </section>
        );
    }
}
