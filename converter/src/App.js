import React, { Component } from 'react';

import './App.scss';
import Header from './components/Header/Header';
import Converter from './components/Converter/Converter';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Converter />
            </div>
        );
    }
}
