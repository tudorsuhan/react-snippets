import React, { Component } from 'react';
import './Typing.css';
import TypingEffect from './TypingEffect.js';

export default class Typing extends Component {
    render() {
        return (
            <div className="type">
                <p id="typing">
                    Is it 
                    <span id="typing--text">
                        <TypingEffect 
                            data={[
                                " Wordpress Themes", 
                                " Landing Page",
                                " Ecommerce",
                                " Personal Blog",
                                " Portofolio",
                                " Webapp",
                                " HTML Templates",
                                " Performance Optimization",
                                " SEO",
                                " Technical Consulting",
                                " Interface Design"
                            ]} 
                        />
                    </span>
                    <br />
                    You're Looking For?
                </p>
            </div>
        );
    }
}
