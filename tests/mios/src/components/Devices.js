import React, { Component, Fragment } from 'react';
import './Devices.scss';
import fetch from 'fetch-retry';
import moment from 'moment';
import { timeConverter } from '../utils/timeConverter';
import { CONSTANTS } from '../constants/constants';

const URL = '/api';

let headers = new Headers();
headers.append("Accept", "application/json");
headers.append("Content-Type", "application/json")
let init = {
    method: "GET",
    cache: "no-store",
    mode: "cors",
    headers: headers
}

export default class Devices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            loading: false,
            error: null,
            response: '',
            post: '',
            responseToPost: '',
        }
    }
    componentDidMount() {
        this.setState({ loading: true });
        this.getData();
        /**
         * Poll the same web service at every 30s
         */
        window.setInterval(() => {
            this.getData();
            console.clear();
            console.log('Refreshed');
        }, 30000)
    }
    getData = async () => {
        /**
         * Fetch with a retry mechanism 
         */
        await fetch(URL, { retries: 3, retryDelay: 1000, retryOn: [500, 503] }, init)
            .then(response => response.json() )
            .then(results => {
                this.setState({ data: results, loading: false });
            } )
            .catch(error => console.log(error) )
    }
    handleAddDevice = async (event) => {
        event.preventDefault();
        const response = await fetch('/api/devices', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ post: this.state.post }),
        });
        const body = await response.text();
        console.log(body)
        this.setState({ 
            responseToPost: body
        });
    }
    updateInputValue = (event) => {
        this.setState({
            post: event.target.value
        });
    }
    render() {
        const { data, loading, error, post, responseToPost } = this.state;
        if (error) return <div>{error.message}</div>;
        if (loading) return <div className="loading">Loading...</div>;
        // console.log(data)
        console.log(data.devices)
        return (
            <Fragment>
                <ul className="data">
                    <h1 className="data-title">Devices</h1>
                    <code className="data-loadtime">{moment(timeConverter(data.loadtime)).format('MMMM Do YYYY, h:mm:ss a')}</code>
                    {
                        Object.keys(data).map((key, id) => 
                            <Fragment key={id}>
                                {
                                    key === 'devices' && 
                                    data.devices.map(device => (
                                        <li className="data-device" key={device.id}>
                                            <div className="data-device__category-no">{device.category}</div>
                                            {
                                                Object.keys(CONSTANTS).map((CONSTANT) => (
                                                    (device.category === 2) && (CONSTANTS[CONSTANT] === 2) ? 
                                                    <div className="data-device__category" key={CONSTANT}>{CONSTANT}</div> : 
                                                    (device.category === 3) && (CONSTANTS[CONSTANT] === 3) ? 
                                                    <div className="data-device__category" key={CONSTANT}>{CONSTANT}</div> : 
                                                    (device.category === 4) && (CONSTANTS[CONSTANT] === 4) ? 
                                                    <div className="data-device__category" key={CONSTANT}>{CONSTANT}</div> : 
                                                    (device.category === 5) && (CONSTANTS[CONSTANT] === 5) ? 
                                                    <div className="data-device__category" key={CONSTANT}>{CONSTANT}</div> : 
                                                    (device.category === 6) && (CONSTANTS[CONSTANT] === 6) ? 
                                                    <div className="data-device__category" key={CONSTANT}>{CONSTANT}</div> : 
                                                    (device.category === 7) && (CONSTANTS[CONSTANT] === 7) ? 
                                                    <div className="data-device__category" key={CONSTANT}>{CONSTANT}</div> : 
                                                    (device.category === 14) && (CONSTANTS[CONSTANT] === 14) ? 
                                                    <div className="data-device__category" key={CONSTANT}>{CONSTANT}</div> : 
                                                    (device.category === 16) && (CONSTANTS[CONSTANT] === 16) ? 
                                                    <div className="data-device__category" key={CONSTANT}>{CONSTANT}</div> : 
                                                    (device.category === 18) && (CONSTANTS[CONSTANT] === 18) ? 
                                                    <div className="data-device__category" key={CONSTANT}>{CONSTANT}</div> : 
                                                    (device.category === 24) && (CONSTANTS[CONSTANT] === 24) ? 
                                                    <div className="data-device__category" key={CONSTANT}>{CONSTANT}</div> : 
                                                    ''
                                                ))
                                            }
                                            <div className="data-device__name">{ device.name ? device.name : 'N/A' }</div>
                                            { 
                                                (device.category === 2) ? 
                                                    <div className="data-device__status">Status: {device.level ? device.level : '-'}</div> : 
                                                (device.category === 3) ? 
                                                    (device.status === '1' ? <div className="data-device__status">Status: ON</div> : 
                                                    device.status === '0' ? <div className="data-device__status">Status: OFF</div> : '') : 
                                                (device.category === 4) ? 
                                                    (device.armed === '1' ? <div className="data-device__status">Status: ARMED</div> : 
                                                    device.armed === '0' ? <div className="data-device__status">Status: DISARMED</div> : '') : 
                                                (device.category === 7) ? 
                                                    <div className="data-device__status">Battery: {device.batterylevel ? device.batterylevel : '-'}</div> : 
                                                (device.category === 6) ? 
                                                    <div className="data-device__status">Armed: {device.armedtripped ? device.armedtripped : '-'}</div> : 
                                                (device.category === 16) ? 
                                                    <div className="data-device__status">Battery: {device.batterylevel ? device.batterylevel : '-'}</div> : 
                                                (device.category === 18) ? 
                                                    <div className="data-device__status">Battery: {device.batterylevel ? device.batterylevel : '-'}</div> : 
                                                (device.category === 24) ? 
                                                    <div className="data-device__status">Armed: {device.armedtripped ? device.armedtripped : '-'}</div> : 
                                                (device.category === 5) ? 
                                                    <div className="data-device__status">Battery: {device.batterylevel ? device.batterylevel : '-'}</div> : 
                                                ''
                                            }
                                        </li>
                                    ))
                                }
                            </Fragment>
                        )
                    }
                </ul>
                <div className="status">
                    <h2>Status Box</h2>
                    <form onSubmit={this.handleAddDevice}>
                        <input type="text" className="status__input" value={post} onChange={event => this.updateInputValue(event)} />
                        <button type="submit" className="status__button">Submit</button>
                    </form>
                    <p>{responseToPost}</p>
                    <p>{post}</p>
                    {Object.keys(data).map((key, id) => 
                        <Fragment key={id}>
                            {key === 'devices' && 
                            data.devices.push({
                                name: post
                            })}
                        </Fragment>
                    )}
                    {Object.keys(data).map(device => (
                        /**
                         * Detect if are changes in devices array
                         */
                        <div className="status__device-added">
                            { data.devices.length > 16 && console.log(`New device was added`) }
                        </div>
                    ))}
                </div>
            </Fragment>
        );
    }
}