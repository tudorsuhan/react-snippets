import React, { Component } from 'react';
import './Cubes.css';
// import './CubesAnimation.js';

export default class Cubes extends Component {
    render() {
        return (
            <div id="cubes">
                <figure>
                    <div id="header-hero"></div>
                </figure>
                <template id="cube-template">
                    <div className="cube">
                        <div className="shadow"></div>
                        <div className="sides">
                            <div className="back"></div>
                            <div className="top"></div>
                            <div className="left"></div>
                            <div className="front"></div>
                            <div className="right"></div>
                            <div className="bottom"></div>
                        </div>
                    </div>
                </template>
            </div>
        );
    }
}
