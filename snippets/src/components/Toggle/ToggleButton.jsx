import React, { Component } from 'react';

export default class ToggleButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        }
    }

    handleClick = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return(
            <button className={"btn btn-success"} onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}