import React, { Component } from 'react'

/**
 * Render Props Pattern
 */
// const AppConverter = () => (
//     <Amount
//         converter={amount => (
//             <div>
//                 <h1>My Currency Converter</h1>
//                 <Pound amount={amount} />
//                 <Euro amount={amount} />
//             </div>
//         )}
//     />
// );

// class Amount extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             amount: 0,
//         };
//     }

//     onIncrement = () => {
//         this.setState(state => ({ amount: state.amount + 1 }));
//     };

//     onDecrement = () => {
//         this.setState(state => ({ amount: state.amount - 1 }));
//     };

//     render() {
//         const { amount } = this.state;
//         return (
//             <div>
//                 <span>US Dollar: {amount} </span>
//                 <button type="button" onClick={this.onIncrement}>+</button>
//                 <button type="button" onClick={this.onDecrement}>-</button>
//                 {this.props.converter(amount)}
//             </div>
//         );
//     }
// }

// const Euro = ({ amount }) => <p>Euro: {amount * 0.86}</p>;
// const Pound = ({ amount }) => <p>Pount: {amount * 0.76}</p>;

// export default AppConverter;



/**
 * Render Prop Component Alternative: Higher-Order Component
 */
const withAmount = currencyComponents =>
    class Amount extends Component {
        constructor(props) {
            super(props)
            this.state = {
                amount: 0
            }
        }
        onIncrement = () => {
            this.setState(prevState => ({
                amount: prevState.amount + 1
            }))
        }
        onDecrement = () => {
            this.setState(prevState => ({
                amount: prevState.amount - 1
            }))
        }
        render() {
            const { amount } = this.state;
            return (
                <div>
                    <span>US Dollar: {amount}</span>
                    <button type="button" onClick={this.onIncrement}>+</button>
                    <button type="button" onClick={this.onDecrement}>-</button>
                    {currencyComponents.map(CurrencyComponent => (
                        <CurrencyComponent key={Math.random(1)} amount={amount} />
                    ))}
                </div>
            )
        }
    }

const Euro = ({ amount }) => <p>Euro Amount: {(amount * 0.86).toFixed(2)}</p>
const Pound = ({ amount }) => <p>Pound Amount: {(amount * 0.76).toFixed(2)}</p>

const CurrenciesWithAmount = withAmount([Euro, Pound])

const AppConverter = () => <CurrenciesWithAmount />

export default AppConverter