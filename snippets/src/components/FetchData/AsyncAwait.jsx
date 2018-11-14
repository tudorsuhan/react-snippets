import React, { Component } from 'react'
import axios from 'axios'

const API = 'https://hn.algolia.com/api/v1/search?query='
const DEFAULT_QUERY = 'react-native'

export default class AsyncAwait extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hits: [],
            isLoading: false,
            error: null
        }
    }
    async componentDidMount() {
        this.setState({ isLoading: true });
        try {
            const result = await axios.get(API + DEFAULT_QUERY);

            this.setState({
                hits: result.data.hits,
                isLoading: false
            });
        } catch (error) {
            this.setState({
                error,
                isLoading: false
            });
        }
    }
    render() {
        const { hits, isLoading, error } = this.state;
        if (error) return <div>{error.message}</div>;
        if (isLoading) return <div>Loading...</div>;
        return (
            <ul>
                {hits.map(hit =>
                    <li key={hit.objectID}>
                        <a href={hit.url}>{hit.title}</a>
                    </li>
                )}
            </ul>
        )
    }
}