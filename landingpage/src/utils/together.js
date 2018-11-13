import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Together extends Component {

    static propTypes = {
        relationshipStatus: PropTypes.string,
        breakupRates: PropTypes.number,
        successfulBreakupRates: PropTypes.object,
        tsLove: PropTypes.bool,
        hlLove: PropTypes.bool
    }

    defaultState = {
        relationshipStatus: undefined,
        breakupRates: '100%',
        successfulBreakupRates: 0,
        tsLove: true,
        hlLove: undefined
    }

    constructor(props) {
        super(props);
        this.state = this.defaultState;
    }

    componentDidMount = () => {
      this.estimatePosibilities();
    }

    estimatePosibilities() {
        if( typeof hlLove !== undefined ) {
            this.setState({
                relationshipStatus: 'Works',
                breakupRates: 0,
                successfulBreakupRates: null,
                tsLove: true + this.state.tsLove++,
                hlLove: true + this.state.hlLove++
            })
        }
    }

    render() {
        return (
            <button onClick={this.estimatePosibilities}>Fire LOVE!</button>
        );
    }
}
