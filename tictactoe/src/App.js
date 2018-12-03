import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './App.css';
import Game from './components/Game/Game.js';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <img src={logo} className="App__logo" alt="Logo" />
                <Game />
            </div>
        );
    }
}