import React, { Component } from 'react';
import './Header.css';
import Collaborate from './Collaborate/Collaborate.js';
import Cubes from './Cubes/Cubes.js';
import Typing from './Typing/Typing.js';
import VerticalText from './VerticalText/VerticalText.js';

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <VerticalText />
                <div className="wrapper">
                    <Cubes />
                    <Typing />
                    <Collaborate />
                </div>
            </header>
        );
    }
}
