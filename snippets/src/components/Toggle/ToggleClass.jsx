import React, { Component } from 'react';
import '../../styles/app.css';

export default class ToggleClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isCondition: false
        }
    }

    handleClick = () => {
        this.setState({
            isCondition: !this.state.isCondition
        })
    }

    render() {
        return(
            <button className={this.state.isCondition ? 'btn btn-success red' : 'btn btn-success green'} onClick={this.handleClick}>
                Button
            </button>
        );
    }
}