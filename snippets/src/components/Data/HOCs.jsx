import React, { Component } from 'react'
import axios from 'axios'

const API = 'https://hn.algolia.com/api/v1/search?query='
const DEFAULT_QUERY = 'javascript'

const withFetching = (url) => (Comp) =>
    class WithFetching extends Component {
        constructor(props) {
            super(props)
            this.state = {
                data: null,
                isLoading: false,
                error: null
            }
        }
        componentDidMount() {
            this.setState({ isLoading: true })
            axios.get(url)
                .then(result => this.setState({ data: result.data, isLoading: false }))
                .catch(error => this.setState({ error, isLoading: false }))
        }
        render() {
            return <Comp {...this.props} {...this.state} />
        }
    }

const HOCs = ({ data, isLoading, error }) => {
    if (!data) return <div>No data yet...</div>
    if (error) return <div>{error.message}</div>
    if (isLoading) return <div>Loading...</div>

    return (
        <ul>
            {data.hits.map(hit =>
                <li key={hit.objectID}>
                    <a href={hit.url}>{hit.title}</a>
                </li>
            )}
        </ul>
    );
}

const FetchWithHOCs = withFetching(API + DEFAULT_QUERY)(HOCs)

export default FetchWithHOCs