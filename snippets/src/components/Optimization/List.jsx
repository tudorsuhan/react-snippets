import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { pure } from 'recompose'

/**
 * Imporove PERFORMANCE preventing component re-rendering using 
 * 'shouldComponentUpdate' || 'PureComponent'
 */
const list = new Array(5000).fill(0).map((v, i) => i)
console.log(list)

export default class List500 extends Component {
    state = {
        perspective: false
    }
    togglePerspective = () => {
        this.setState(prevState => ({
            perspective: !prevState.perspective
        }))
    }
    render() {
        console.log('render App');
        return (
            <Fragment>
                <div>
                    <Button type="button" onClick={this.togglePerspective}>Toggle Perspective</Button>
                </div>
                <Perspective perspective={this.state.perspective}>
                    {list.map(v => <Square key={v} number={v} />)}
                </Perspective>
            </Fragment>
        )
    }
}

const Button = ({ onClick, children }) => (
    console.log('render Button') || <button type="button" onClick={onClick}>{children}</button>
)

// const Square = ({ number }) => console.log('render Square') || <Item>{number * number}</Item>

// class Square extends Component {
//     shouldComponentUpdate = (nextProps, nextState) => {
//         if (this.props.number === nextProps.number) {
//             return false
//         } else {
//             return true
//         }
//     }
//     render() {
//         const { number } = this.props
//         return (
//             console.log('render Square') || <Item>{number * number}</Item>
//         )
//     }
// }

// class Square extends PureComponent {
//     render() {
//         const { number } = this.props
//         return (
//             console.log('render Square') || <Item>{number * number}</Item>
//         )
//     }
// }

const Square = pure(({ number }) => console.log('render Square') || <Item>{number * number}</Item>)

const Item = styled.div`
    margin: 10px;
`;

const Perspective = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${props => (props.perspective ? 'row' : 'column')}
`;