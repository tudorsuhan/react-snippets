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

const applySetError = () => ({
    isError: true,
    isFetching: false,
});

const withFetching = (url) => (Component) =>
    class WithFetching extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: null,
                isFetching: false,
                isError: null,
            };
        }

        componentDidMount() {
            this.setState({ isFetching: true, });
            axios.get(url)
                .then(results => this.setState({ data: results.data, isFetching: false, }))
                .catch(this.onSetError);
        }

        onSetError = () => this.setState(applySetError);

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

const HOCs = ({ data, isError }) => {
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
)(HOCs);

export default FetchWithHOCs;
