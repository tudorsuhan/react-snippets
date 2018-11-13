import React, { Component } from 'react';
import './Form.js';

export default class Form extends Component {
    render() {
        return (
            <form className="form">
                <div className="form__name">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value="" id="name" required autoComplete="name"/> 
                </div>
                <div className="form__email">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value="" id="email" required autoComplete="email"/>
                </div>
                <div className="form__phone">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" name="phone" value="" id="phone" required autoComplete="phone"/>
                </div>
                <div className="form__message">
                    <label htmlFor="message">Message</label>
                    <textarea rows="5" name="message" id="message"></textarea>
                </div>
                <div className="form__submit">
                    <button type="button">Submit</button>
                </div>
            </form>
        );
    }
}
