import React, { Component } from 'react';

/**
 * Function based HOCs
 * Compose HOCs
 */
// const withTransformProps = mapperFunc => 
//     BaseComponent => baseProps => {
//         const transformedProps = mapperFunc(baseProps)
//         return <BaseComponent {...transformedProps} />
//     }

// const renderDisplayList = ({ list }) => (
//     <ul>
//         {
//             list.map(char => 
//                 <li key={char.name}>
//                     <div>Character: {char.name}</div>
//                     <div>Side: {char.side}</div>
//                 </li>
//             )
//         }
//     </ul>
// )

// const FilteredList = withTransformProps(
//     ({ list, side }) => ({
//         list: list.filter(FilteredListChar => FilteredListChar.side === side)
//     })
// )(renderDisplayList)

// export default FilteredList;

/**
 * Class based HOCs
 * Compose HOCs
 */

const starWarsChars = [
    { name:'Luke', side:'light' },
    { name:'Darth Vader', side:'dark' },
    { name:'Obi-wan Kenobi', side:'light'},
    { name:'Palpatine', side:'dark'},
]

const withTransformProps = mapperFunc => 
    BaseComponent => baseProps => {
        const transformedProps = mapperFunc(baseProps)
        return <BaseComponent {...transformedProps} />
    }

const withSimpleState = defaultState => BaseComponent => {
    return class WithSimpleState extends Component {
        constructor(props) {
            super(props)
            this.state = {
                value: defaultState
            }
            this.updateState = this.updateState.bind(this)
        }
        updateState(value) {
            this.setState({ value })
        }
        render() {
            return (
                <BaseComponent {...this.props} stateValue={this.state.value} stateHandler={this.updateState} />
            )
        }
    }
}

const renderDisplayList = ({ list, stateHandler, otherSide }) => (
    <ul>
        <button onClick={() => stateHandler(otherSide)}>Switch</button>
        {
            list.map(char => 
                <li key={char.name}>
                    <div>Character: {char.name}</div>
                    <div>Side: {char.side}</div>
                </li>
            )
        }
    </ul>
)

const compose = (...hocs) => BaseComponent => 
    hocs.reduceRight((acc, hoc) => hoc(acc), BaseComponent)

const enhance = compose(
    withSimpleState('dark'),
    withTransformProps(
        ({ list, stateValue, stateHandler }) => {
            const otherSide = stateValue === 'dark' ? 'light' : 'dark'
            return {
                stateHandler,
                otherSide,
                list: list.filter(char => char.side === stateValue)
            }
        }
    )
)

const FilteredList = enhance(renderDisplayList)

export default class Filter extends Component {
    render() {
        return (
            <FilteredList list={starWarsChars} />
        );
    }
}