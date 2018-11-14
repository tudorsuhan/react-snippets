import React, { Component } from 'react'

export default class DataChildToParent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fromChild: ''
        }
    }
    handleData = (data) => {
        this.setState({
            fromChild: data
        })
    }
    render() {
        const { fromChild } = this.state
        return (
            <div>
                <Input handlerFromParent={this.handleData} />
                <div>Receive by PARENT: <b>{fromChild}</b></div>
            </div>
        )
    }
}

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputField: ''
        }
    }
    handleChange = (event) => {
        this.setState({
            inputField: event.target.value
        })
    }
    submitHandler = (event) => {
        event.preventDefault()
        this.props.handlerFromParent(this.state.inputField)
        this.setState({
            inputField: ''
        })
    }
    render() {
        const { inputField } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" value={inputField} onChange={this.handleChange} />
                    <input type="submit" value="Submit"/>
                </form>
                <div>Visible in CHILD: <b>{inputField}</b></div>
            </div>
        )
    }
}