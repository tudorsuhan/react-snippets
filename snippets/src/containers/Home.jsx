import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <main>
                <ul>
                    <li><Link to="/toggle-button">Toggle Button</Link></li>
                    <li><Link to="/toggle-class">Toggle Class</Link></li>
                    <li><Link to="/form-validation">Form Validation</Link></li>
                    <li><Link to="/react-validation">React Validation</Link></li>
                    <li><Link to="/mouse-tracker">Mouse Tracker</Link></li>
                    <li><Link to="/toggle-filtered-list">Toggle Filtered List</Link></li>
                    <li><Link to="/timer">Timer</Link></li>
                    <li><Link to="/todo">Todo</Link></li>
                    <li><Link to="/counter">Counter</Link></li>
                    <li><Link to="/search-filter-list">Search Filter List</Link></li>
                    <li><Link to="/search">Search</Link></li>
                    <li><Link to="/get-data-with-fetch">Get Data with FETCH</Link></li>
                    <li><Link to="/get-data-with-axios">Get Data with AXIOS</Link></li>
                    <li><Link to="/get-data-with-async-await">Get Data with ASYNC & AWAIT</Link></li>
                    <li><Link to="/get-data-with-hocs">Get Data with HOCs</Link></li>
                    <li><Link to="/get-data-with-render-props">Get Data with RENDER PROPS</Link></li>
                    <li><Link to="/curency-converter">Currency Converter</Link></li>
                    <li><Link to="/list">List</Link></li>
                    <li><Link to="/pass-props-to-other-component">Pass Props To Other Component</Link></li>
                    <li><Link to="/redux-fetch">Fetch data with REDUX</Link></li>
                    <li><Link to="/pass-data-from-child-to-parent">Pass data from CHILD to PARENT</Link></li>
                </ul>
            </main>
        );
    }
}