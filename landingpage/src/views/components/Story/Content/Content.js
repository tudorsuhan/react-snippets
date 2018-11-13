import React, { Component } from 'react';
import './Content.css';

export default class Content extends Component {
    render() {
        return (
            <div className="section-content sc-story">
                <p className="paragraph p-story">
                    Devio is a <span>passionate</span>, 
                    tight-knit team of premier specialists who can take on any challenge in the sphere of web and mobile app development. 
                    We love what we do, but what really makes us shine is years of experience and a 
                    deep knowledge of internal business processes that empower us to develop products which are exactly as they should be.
                    We never take the easy way and keep up with the times, always sticking to the newest trends in design and development.
                    As entrepreneurs in our own right, at <span>Devio</span> we have a heart for the hopes, 
                    dreams and needs of our clients. 
                    We team great design and development with <span>exceptional quality</span> control and the ability to think outside of what is expected. 
                    Accessible and responsive, all of our work is handled in-house, fuelled by <span>creativity</span> (and exceptional coffee).
                </p>
            </div>
        );
    }
}
