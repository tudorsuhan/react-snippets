import React, { Component, Fragment } from 'react';
import { compose } from 'recompose';

const applyUpdateResult = (result) => (prevState) => ({
    hits: [...prevState.hits, ...result.hits],
    page: result.page,
    isLoading: false,
});

const applySetResult = (result) => (prevState) => ({
    hits: result.hits,
    page: result.page,
    isLoading: false,
});

const getGackerNewsUrl = (value, page) =>
    `https://hn.algolia.com/api/v1/search?query=${value}&page=${page}&hitsPerPage=100`;

export default class InfiniteScroll extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hits: [],
            page: null,
            isLoading: false,
        };
    }

    onInitialSearch = (event) => {
        event.preventDefault();
        const { value } = this.input;
        if (value === '') {
            return;
        }
        this.fetchStories(value, 0);
    }

    onPaginatedSearch = () =>
        this.fetchStories(this.input.value, this.state.page + 1);

    fetchStories = async (value, page) => {
        this.setState({ isLoading: true });
        await fetch(getGackerNewsUrl(value, page))
            .then(response => response.json())
            .then(result => this.onSetResult(result, page));
    }

    onSetResult = (result, page) =>
        page === 0
            ? this.setState(applySetResult(result))
            : this.setState(applyUpdateResult(result))

    render() {
        const { hits, page, isLoading } = this.state;
        console.log(hits)
        return (
            <div>
                <h1>Search Hacker News</h1>

                <form type="submit" onSubmit={this.onInitialSearch}>
                    <input type="text" ref={node => this.input = node} />
                    <button type="submit">Search</button>
                </form>

                <ListWithLoadingWithInfinite
                    list={hits}
                    page={page} 
                    isLoading={isLoading} 
                    onPaginatedSearch={this.onPaginatedSearch}
                />
            </div>
        );
    }
}

const withInfiniteScroll = (Component) =>
    class WithInfiniteScroll extends React.Component {
        componentDidMount = () => {
            window.addEventListener('scroll', this.onScroll, false);
        }

        componentWillMount = () => {
            window.removeEventListener('scroll', this.onScroll, false);
        }

        onScroll = () => {
            if ((window.innerHeight + window.scrollY) >=
                (document.body.offsetHeight - 500) &&
                this.props.list.length && 
                !this.props.isLoading ) {
                this.props.onPaginatedSearch();
            }
        }

        render() {
            return <Component {...this.props} />
        }
    }

const List = ({ list }) =>
    <div className="list">
        {list.map(item => <div className="list-row" key={item.objectID}>
            <a href={item.url}>{item.title}</a>
        </div>)}
    </div>

const withLoading = (Component) => (props) =>
    <Fragment>
        <Component {...props} />
        <div className="interactions">
            {props.isLoading && <span>Loading...</span>}
        </div>
    </Fragment>

const ListWithLoadingWithInfinite = compose(
    withInfiniteScroll,
    withLoading,
)(List);