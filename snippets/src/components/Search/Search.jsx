import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            query: '',
            results: [],
            error: null
        }
    }

    getData = (query) => {
        axios.get(`https://hn.algolia.com/api/v1/search?query=${query}`)
            .then(({ data }) => this.setState({ results: data.hits }))
            .catch(error => this.setState({ error }))
    } 

    handleInputChange = (event) => {
       const { value: query } = event.target
        this.setState({ query })

        if(query && query.length > 1) {
           this.getData(query)
        }
    }
    
    render() {
        const { error } = this.state;
        if(error) return <div>{error.message}</div>;
        return (
            <form>
                <input 
                    type="text" 
                    placeholder="Search for ..." 
                    onChange={this.handleInputChange}
                />
                <Suggestions results={this.state.results} />
            </form>
        )
    }
}

const Suggestions = (props) => {
    const options = props.results.map(result => {
        console.log(result)
        return (
        <li key={result.objectID}>{result.title}</li>
    )})
    return <ul>{options}</ul>
}

