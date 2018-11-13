import React, { Component } from 'react'
import PropTypes from 'prop-types'

const label = {
    display: 'block'
}

export default class TodoApp extends Component {
    static propTypes = {
        items: PropTypes.array,
        text: PropTypes.string
    }
    static defaultProps = {
        items: [''],
        text: 'Add'
    }
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            text: ''
        }
    }
    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if(!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        }
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }))
    }
    render() {
        return (
            <div>
                <h3>TODO</h3>
                <TodoList items={this.state.items} />
                <form onClick={this.handleSubmit}>
                    <label style={label} htmlFor="new-todo">What needs to be done?</label>
                    <input type="text" id="new-todo" value={this.state.text} onChange={this.handleChange} />
                    <button>Add #{this.state.items.length + 1}</button>
                </form>
            </div>
        )
    }
}

class TodoList extends Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        )
    }
}