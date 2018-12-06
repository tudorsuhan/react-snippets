import React, { Component } from 'react';

export default class ConvertTo extends Component {
    render() {
        const { currency, currencyTo, handleTo } = this.props;
        return (
            <div className="converter__convertto">
                <label htmlFor="convertto">To</label>
                <select name="convertto" value={currencyTo} onChange={handleTo}>
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
