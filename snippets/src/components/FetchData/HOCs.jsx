/**
 * https://codepen.io/pagetribe/pen/Rgovop?editors=0010
 * https://lucasmreis.github.io/blog/simple-react-patterns/
 * https://medium.com/@Farzad_YZ/handle-loadings-in-react-by-using-higher-order-components-2ee8de9c3deb
 * https://drikerf.com/higher-order-component-and-data-fetching/
 * https://www.robinwieruch.de/react-fetching-data/
 * 
 * https://medium.com/dailyjs/react-composing-higher-order-components-hocs-3a5288e78f55
 */

import React, { Fragment } from 'react';
import axios from 'axios';
import { compose } from 'recompose';

const API = 'http://android.softwsp.com/wp-json/wp/v2/';
const DEFAULT_QUERY = 'posts?per_page=100';

const applyError = () => ({
    isError: true,
    isFetching: false,
});

const withFetching = (url) => (Component) =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: null,
                isFetching: false,
                isError: null,
            };
        }

        componentDidMount() {
            this.getData();
        }

        getData = async () => {
            this.setState({ isFetching: true, });
            await axios.get(url)
                .then(results => this.onFetchResult(results))
                .catch(this.onFetchError);
        }

        onFetchError = () => this.setState(applyError);

        onFetchResult = (results, key) => {
            localStorage.setItem(key, JSON.stringify(results.data));
            if (results.status === 200) {
                this.setState({ data: results.data, isFetching: false, });
                console.log(results);
            }
        }

        onLocalStorage = (value, key) => {
            const cached = localStorage.getItem(key, value);
            if (cached) {
                this.setState({ data: JSON.parse(cached), });
                return;
            } 
        }

        render() {
            return <Component {...this.props} {...this.state} />
        }
    }

const withLoading = (conditionFn) => (Component) => (props) =>
    <Fragment>
        <Component {...props} />
        {conditionFn(props) && <span>Loading...</span>}
    </Fragment>

const fetchingCondition = props => props.isFetching;

const Articles = ({ data, isError }) => {
    if (isError) return <div>{isError.message}</div>;
    return (
        <ul>
            {data && data.map(result =>
                <li key={result.id}>
                    <a href={result.url}>{result.title.rendered}</a>
                </li>
            )}
        </ul>
    );
}

const FetchWithHOCs = compose(
    withFetching(API + DEFAULT_QUERY),
    withLoading(fetchingCondition),
)(Articles);

export default FetchWithHOCs;
