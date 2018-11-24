import React, { Component } from 'react';

export default class SessionLocalStorage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hits: null,
        };
    }

    onSearch = (event) => {
        event.preventDefault();
        const { value } = this.input;
        console.log(value);
        if (value === '') return;
        this.fetchData(value);
        this.onLocalStorage();
    }

    fetchData = (value) => 
        fetch('https://hn.algolia.com/api/v1/search?query=' + value)
        .then(response => response.json())
        .then(result => this.onSetResult(result, value))

    onSetResult = (result, key) => {
        localStorage.setItem(key, JSON.stringify(result.hits));
        console.log(result);
        this.setState({ hits: result.hits });
    }

    onLocalStorage = (value, key) => {
        const cachedArticles = localStorage.getItem(key, value);
        if (cachedArticles) {
            this.setState({ hits: JSON.parse(cachedArticles), });
            return;
        } 
     }

    render() {
        const { hits } = this.state;
        return (
            <div>
                <h1>Search Hacker News with Local Storage</h1>
                <p>
                    There shouldn't be a second network request,
                    when you search for something twice.
                </p>
                <form action="" onSubmit={this.onSearch}>
                    <input type="text" ref={node => this.input = node} />
                    <button type="submit">Search</button>
                </form>
                {
                    hits && hits.map(hit => <div key={hit.objectID}>{hit.title}</div>)
                }
            </div>
        )
    }
}
