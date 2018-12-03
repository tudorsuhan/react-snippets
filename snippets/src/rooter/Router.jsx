import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';

import MouseTracker from '../components/MouseTracker';
import Timer from '../components/Timer';
import TodoApp from '../components/Todo';
import Counter from '../components/Counter';
import CurrencyConverter from '../components/CurrencyConverter';
import AdvancedListComponent from '../components/AdvancedList';
import GetUserInformation from '../components/GetUserInformation/GetUserInformation';

import SessionLocalStorage from '../components/SessionLocalStorage/SessionLocalStorage';

import Pagination from '../components/Pagination/Pagination';
import HOCPagination from '../components/Pagination/HOCPagination';

import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll';
import HOCInfiniteScroll from '../components/InfiniteScroll/HOCInfiniteScroll';

import ToggleButton from '../components/Toggle/ToggleButton';
import ToggleClass from '../components/Toggle/ToggleClass';
import Filter from '../components/Toggle/ToggleFilterList';

import SearchFilterList from '../components/Search/SearchFilterList';
import Search from '../components/Search/Search';

import DataChildToParent from '../components/PassingData/ChildToParent';
import EventChildToParent from '../components/PassingData/ChildToParentEvent';
import DataParentToChild from '../components/PassingData/ParentToChild';

import ManageStateWithArrays from '../components/ReactState/ManageStateWithArrays'

import FetchDataWithRedux from '../components/Redux/ReduxFetch';

import FormValidation from '../components/Validation/FormValidation';
import ReactValidation from '../components/Validation/ReactValidation';

import List from '../components/Optimization/List';
import Properties from '../components/Optimization/PassProps';

import Fetch from '../components/FetchData/Fetch';
import Axios from '../components/FetchData/Axios';
import AsyncAwait from '../components/FetchData/AsyncAwait';
import FetchWithHOCs from '../components/FetchData/HOCs';
import RenderPropApproach from '../components/FetchData/RenderProps';

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
        <Route path="/redux-fetch" component={FetchDataWithRedux} />
        <Route path="/pass-data-from-child-to-parent" component={DataChildToParent} />
        <Route path="/pass-data-from-parent-to-child" component={DataParentToChild} />
        <Route path="/pass-event-from-child-to-parent" component={EventChildToParent} />
        <Route path="/manage-react-state-with-arrays" component={ManageStateWithArrays} />
        <Route path="/pagination" component={Pagination} />
        <Route path="/pagination-hoc" component={HOCPagination} />
        <Route path="/infinitescroll" component={InfiniteScroll} />
        <Route path="/infinitescroll-hoc" component={HOCInfiniteScroll} />
        <Route path="/react-advanced-list-component" component={AdvancedListComponent} />
        <Route path="/session-and-localstorage-in-react" component={SessionLocalStorage} />
        <Route path="/get-user-location" component={GetUserInformation} />
    </Switch>
);

export default Routes;