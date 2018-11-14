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
                <form action="">
                    <input type="text" value={inputValue} onChange={this.handleChange} />
                </form>
                {/* <Input value={inputValue} onChange={this.handleChange} /> */}
                <div>Data in parent: {inputValue}</div>
            </div>
        )
    }
}

// const Input = ({ handleChange }) => (
//     <div>
//         <form action="">
//             <input type="text" onChange={handleChange} />
//         </form>
//         <div>Data from parent: </div>
//     </div>
// )