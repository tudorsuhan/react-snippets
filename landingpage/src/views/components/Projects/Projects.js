import React, { Component } from 'react';
import './Projects.css';
import Heading from './Heading/Heading.js';
import Slider from './Slider/Slider.js';

export default class Projects extends Component {
    render() {
        return (
            <section className="section section--projects">
                <div className="wrapper">
                    <Heading />
                    <Slider />
                </div>
            </section>
        );
    }
}
