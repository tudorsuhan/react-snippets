import React, { Component } from 'react';

export default class ConvertFrom extends Component {
    render() {
        const { currency, currencyFrom, handleFrom } = this.props;
        return (
            <div className="converter__convertfrom">
                <label htmlFor="convertfrom">From</label>
                <select name="convertto" value={currencyFrom} onChange={handleFrom}>
                    {
                        Object.keys(currency).map(key => (
                            <option key={key} value={key}>{key}</option>
                        ))
                    }
                </select>
            </div>
        );
    }
}
