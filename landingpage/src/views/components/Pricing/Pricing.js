import React, { Component } from 'react';
import './Pricing.css';
import Content from './Content/Content.js';
import Heading from './Heading/Heading.js';
import Image from './Image/Image.js';

export default class Pricing extends Component {
    render() {
        return (
            <section className="section section--pricing">
                <div className="wrapper">
                    <Heading />
                    <div className="content">
                        <Image />
                        <Content />
                    </div>
                </div>
            </section>
        );
    }
}
