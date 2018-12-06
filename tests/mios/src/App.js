import React, { Component } from 'react';
import './App.scss';
import Devices from './components/Devices';

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Devices />
            </div>
        );
    }
}