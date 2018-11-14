import React, { Component } from 'react'

class Button extends Component {
    handleClick = () => {
        console.log("1. Received click in button (CHILD)")
        this.props.passClick()
    }
    render() {
        return (
            <button onClick={this.handleClick}>+1</button>
        )
    }
}

class Counter extends Component {
    render() {
        const { updValue } = this.props
        return(
            <div>Hello, {updValue}</div>
        )
    }
}

export default class EventChildToParent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
        console.log("2. Received click in EventChildToParent (PARENT)")
    }
    render() {
        return (
            <div>
                <Button passClick={this.increment} />
                <Counter updValue={this.state.count} />
            </div>
        )
    }
}