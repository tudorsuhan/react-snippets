import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import ToggleButton from '../components/ToggleButton';
import ToggleClass from '../components/ToggleClass';
import FormValidation from '../components/Validation/FormValidation';
import MouseTracker from '../components/MouseTracker';
import Filter from '../components/ToggleFilterList';
import Timer from '../components/Timer';
import TodoApp from '../components/Todo';
import Counter from '../components/Counter';
import SearchFilterList from '../components/SearchFilterList';
import Search from '../components/Search';
import Fetch from '../components/Data/Fetch';
import Axios from '../components/Data/Axios';
import AsyncAwait from '../components/Data/AsyncAwait';
import FetchWithHOCs from '../components/Data/HOCs';
import RenderPropApproach from '../components/Data/RenderProps';
import CurrencyConverter from '../components/CurrencyConverter';
import ReactValidation from '../components/Validation/ReactValidation';
import List from '../components/Optimization/List';
import Properties from '../components/Optimization/PassProps';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/toggle-button" component={ToggleButton} />
        <Route path="/toggle-class" component={ToggleClass} />
        <Route path="/form-validation" component={FormValidation} />
        <Route path="/mouse-tracker" component={MouseTracker} />
        <Route path="/toggle-filtered-list" component={Filter} />
        <Route path="/timer" component={Timer} />
        <Route path="/todo" component={TodoApp} />
        <Route path="/counter" component={Counter} />
        <Route path="/search-filter-list" component={SearchFilterList} />
        <Route path="/search" component={Search} />
        <Route path="/get-data-with-fetch" component={Fetch} />
        <Route path="/get-data-with-axios" component={Axios} />
        <Route path="/get-data-with-async-await" component={AsyncAwait} />
        <Route path="/get-data-with-hocs" component={FetchWithHOCs} />
        <Route path="/get-data-with-render-props" component={RenderPropApproach} />
        <Route path="/curency-converter" component={CurrencyConverter} />
        <Route path="/react-validation" component={ReactValidation} />
        <Route path="/list" component={List} />
        <Route path="/pass-props-to-other-component" component={Properties} />
    </Switch>
);

export default Routes;