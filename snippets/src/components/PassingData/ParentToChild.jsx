import React, { Component } from 'react'

export default class DataParentToChild extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }
    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }
    render() {
        const { inputValue } = this.state
        return (
            <div>
                <Input value={inputValue} onChange={this.handleChange} onSubmit={this.handleSubmit} />
                <div>Data in PARENT: {inputValue}</div>
            </div>
        )
    }
}

const Input = ({ value, onChange }) => (
    <div>
        <form action="">
            <input type="text" value={value} onChange={onChange} />
            <input type="submit" value="Submit"/>
        </form>
        <div>Data from PARENT in CHILD: {value}</div>
    </div>
)