import React, { Component } from 'react';

const INITIAL_STATE = {
    value: '',
    alphabet: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
    numbers: [1, 2, 3, 4, 5, 6, 7, 8],
    list: [
        { id: '1', age: 42 },
        { id: '2', age: 33 },
        { id: '3', age: 68 },
    ],
}

export default class ManageStateWithArrays extends Component {

    constructor(props) {
        super(props);
        this.state = INITIAL_STATE;
    }

    onClearArray = () => {
        this.setState({ alphabet: [], numbers: [], });
    }

    onResetArray = () => {
        this.setState({ ...INITIAL_STATE });
    }

    /**
     * Add item in array
     */
    onAddLetter = () => {
        this.setState(state => {
            const alphabet = [...state.alphabet, state.value];
            return {
                alphabet,
                value: '',
            }
        });
    }

    onAddNumber = () => {
        this.setState(state => {
            const numbers = [...state.numbers, state.value];
            return {
                numbers,
                value: '',
            }
        });
    }

    handleAddItemValue = (event) => {
        this.setState({ value: event.target.value })
    }

    /**
     * Update item in array
     */
    onUpdateNumber = () => {
        this.setState(state => {
            const numbers = state.numbers.map(number => number + 1);
            return {
                numbers,
            }
        });
    }

    onUpdateOneNumber = i => {
        this.setState(state => {
            const numbers = state.numbers.map((number, j) => {
                if (j === i) {
                    return number + 1;
                } else {
                    return number;
                }
            });
            return {
                numbers,
            }
        });
    }

    /**
     * Remove item in array
     */
    onRemoveOneNumber = i => {
        this.setState(state => {
            const numbers = state.numbers.filter((number, j) => i !== j);
            return {
                numbers,
            }
        });
    }

    onRemoveFirstNumber = () => {
        this.setState(state => {
            const [first, ...rest] = state.numbers;
            return {
                first,
                numbers: rest,
            }
        });
    }

    onRemoveItem = id => {
        this.setState(state => {
            const list = state.list.filter(item => item.id !== id);
            return {
                list,
            }
        });
    }
 
    render() {
        const { value } = this.state;
        console.log(this.state);
        console.log(this.props);
        return (
            <div className="arraystate">

                <ul className="list">
                    {this.state.list.map(item => (
                        <li key={item.id}>
                            The person is {item.age} years old.
                            <button className="li-button" type="button" onClick={() => this.onRemoveItem(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>

                <ul className="alphabet">
                    {this.state.alphabet.map(letter => (
                        <li key={letter}>{letter}</li>
                    ))}
                    <input type="text" value={value} onChange={this.handleAddItemValue} placeholder={"Add letter"} />
                    <button className="ul-button" type="button" onClick={this.onAddLetter}>Add Letter</button>
                </ul>
                
                <ul className="numbers">
                    {this.state.numbers.map((number, index) => (
                        <li key={number}>{number}
                            <button className="li-button" type="button" onClick={() => this.onUpdateOneNumber(index)}>Update</button>
                            <button className="li-button" type="button" onClick={() => this.onRemoveOneNumber(index)}>Remove</button>
                        </li>
                    ))}
                    <input type="text" value={value} onChange={this.handleAddItemValue} placeholder={"Add number"} />

                    <div className="numbers-buttons">
                        <button className="numbers-btn ul-button" type="button" onClick={this.onAddNumber}>Add Number</button>
                        <button className="numbers-btn ul-button" type="button" onClick={this.onUpdateNumber}>Update All Numbers</button>
                        <button className="numbers-btn ul-button" type="button" onClick={this.onRemoveFirstNumber}>Remove First Number</button>
                    </div>
                </ul>

                <div className="clearreset">
                    <button className="clearreset-btn" type="button" onClick={this.onClearArray}>Clear Array</button>
                    <button className="clearreset-btn" type="button" onClick={this.onResetArray}>Reset Array</button>
                </div>

            </div>
        );
    }
}
