import React, { Component } from 'react';
import moment from 'moment';
import './Date.scss';

export default class Date extends Component {
    render() {
        const date = new Date();
        const currentDate = moment(date).format('LL');
        const currentTime = moment(date.toLocaleTimeString).format('LTS');
        return (
            <div className="date">
                <span className="date__time"><b>Date:</b> {currentDate} - </span>
                <span className="date__date"><b>Time:</b> {currentTime}</span>
            </div>
        )
    }
}
