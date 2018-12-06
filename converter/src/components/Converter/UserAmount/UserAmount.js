import React, { Component } from 'react';

export default class UserAmount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userAmountValue: '',
        };
    }
    updateValueUA = (event) => {
        this.props.onUpdate(event.target.value);
        this.setState({ userAmountValue: event.target.value, })
    }
    render() {
        return (
            <div className="converter__useramount">
                <label htmlFor="userinput">Enter Amount</label>
                <input type="number" name="userinput" id="userinput" onChange={this.updateValueUA} />
            </div>
        );
    }
}
