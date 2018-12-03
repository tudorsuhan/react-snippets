import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            show: true
        }
    }

    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 })
    }

    DecrementItem = () => {
      this.setState({ clicks: this.state.clicks - 1 })
    }

    ToggleClick = () => {
      this.setState({ show: !this.state.show })
    }

    render() {
        return(
            <React.Fragment>
                <div className="Group">
                    <button className="Button Button--Increment" onClick={this.IncrementItem}>+ 1</button>
                    <button className="Button Button--Decrement" onClick={this.DecrementItem}>- 1</button>
                    <button className="Button Button--Toggle" onClick={this.ToggleClick}>{ this.state.show ? 'Hide' : 'Show' }</button>
                </div>
                <div className="Value">{ this.state.show ? <h2>{this.state.clicks}</h2> : '' }</div>
            </React.Fragment>
        );
    }
}
