import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => (
    <main className="dashboard">
        
        <h1 className="dashboard-title">Dashboard</h1>

        <section className="dashboard-grid">

            {/** Toggle */}
            <div className="toggle">
                <div className="toggle-title">Toggle</div>
                <div className="toggle-wrapper">
                    <div className="toggle-item"><Link to="/toggle-button">Toggle Button</Link></div>
                    <div className="toggle-item"><Link to="/toggle-class">Toggle Class</Link></div>
                    <div className="toggle-item"><Link to="/toggle-filtered-list">Toggle Filtered List</Link></div>
                </div>
            </div>

            {/** Validation */}
            <div className="validation">
                <div className="validation-title">Validation</div>
                <div className="validation-wrapper">
                    <div className="validation-item"><Link to="/form-validation">Form Validation</Link></div>
                    <div className="validation-item"><Link to="/react-validation">React Validation</Link></div>
                </div>
            </div>

            {/** Search */}
            <div className="search">
                <div className="search-title">Search</div>
                <div className="search-wrapper">
                    <div className="search-item"><Link to="/search-filter-list">Search Filter List</Link></div>
                    <div className="search-item"><Link to="/search">Search</Link></div>
                </div>
            </div>

            {/** React State */}
            <div className="reactstate">
                <div className="reactstate-title">React State</div>
                <div className="reactstate-wrapper">
                    <div className="reactstate-item"><Link to="/manage-react-state-with-arrays">Manage React State With Arrays</Link></div>
                </div>
            </div>

            {/** Fetch Data */}
            <div className="fetchdata">
                <div className="fetchdata-title">Fetch Data</div>
                <div className="fetchdata-wrapper">
                    <div className="fetchdata-item"><Link to="/get-data-with-fetch">Get Data with FETCH</Link></div>
                    <div className="fetchdata-item"><Link to="/get-data-with-axios">Get Data with AXIOS</Link></div>
                    <div className="fetchdata-item"><Link to="/get-data-with-async-await">Get Data with ASYNC & AWAIT</Link></div>
                    <div className="fetchdata-item"><Link to="/get-data-with-hocs">Get Data with HOCs</Link></div>
                    <div className="fetchdata-item"><Link to="/get-data-with-render-props">Get Data with RENDER PROPS</Link></div>
                    <div className="fetchdata-item"><Link to="/redux-fetch-1">Fetch data with REDUX 1</Link></div>
                    <div className="fetchdata-item"><Link to="/redux-fetch-2">Fetch data with REDUX 2</Link></div>
                </div>
            </div>

            {/** Performance */}
            <div className="performance">
                <div className="performance-title">Performance</div>
                <div className="performance-wrapper">
                    <div className="performance-item"><Link to="/list">List</Link></div>
                </div>
            </div>

            {/** Pass data between components */}
            <div className="passingdata">
                <div className="passingdata-title">Pass data between components</div>
                <div className="passingdata-wrapper">
                    <div className="passingdata-item"><Link to="/pass-props-to-other-component">Pass Props To Other Component</Link></div>
                    <div className="passingdata-item"><Link to="/pass-data-from-child-to-parent">Pass data from CHILD to PARENT</Link></div>
                    <div className="passingdata-item"><Link to="/pass-data-from-parent-to-child">Pass data from PARENT to CHILD</Link></div>
                    <div className="passingdata-item"><Link to="/pass-event-from-child-to-parent">Pass EVENT from CHILD to PARENT</Link></div>
                </div>
            </div>

            {/** Pagination */}
            <div className="pagination">
                <div className="pagination-title">Pagination</div>
                <div className="pagination-wrapper">
                    <div className="pagination-item"><Link to="/pagination">Pagination</Link></div>
                    <div className="pagination-item"><Link to="/pagination-hoc">Pagination with a HOC</Link></div>
                </div>
            </div>

            {/** Infinite Scroll */}
            <div className="infinitescroll">
                <div className="infinitescroll-title">Infinite Scroll</div>
                <div className="infinitescroll-wrapper">
                    <div className="infinitescroll-item"><Link to="/infinitescroll">Infinite Scroll</Link></div>
                    <div className="infinitescroll-item"><Link to="/infinitescroll-hoc">Infinite Scroll with a HOC</Link></div>
                </div>
            </div>

            {/** Session and Local Storage */}
            <div className="sessionlocalstorage">
                <div className="sessionlocalstorage-title">Session and Local Storage</div>
                <div className="sessionlocalstorage-wrapper">
                    <div className="sessionlocalstorage-item"><Link to="/session-and-localstorage-in-react">Session and Local Storage in react</Link></div>
                </div>
            </div>

            {/** Features */}
            <div className="sessionlocalstorage">
                <div className="sessionlocalstorage-title">Features</div>
                <div className="sessionlocalstorage-wrapper">
                    <div className="sessionlocalstorage-item"><Link to="/likes">Handle Likes</Link></div>
                </div>
            </div>

            {/** Other */}
            <div className="other">
                <div className="other-title">Other</div>
                <div className="other-wrapper">
                    <div className="other-item"><Link to="/mouse-tracker">Mouse Tracker</Link></div>
                    <div className="other-item"><Link to="/timer">Timer</Link></div>
                    <div className="other-item"><Link to="/todo">Todo</Link></div>
                    <div className="other-item"><Link to="/counter">Counter</Link></div>
                    <div className="other-item"><Link to="/curency-converter">Currency Converter</Link></div>
                    <div className="other-item"><Link to="/react-advanced-list-component">React Advanced List Component</Link></div>
                    <div className="other-item"><Link to="/get-user-location">Get User Location</Link></div>
                </div>
            </div>

        </section>
        
    </main>
)

export default Home