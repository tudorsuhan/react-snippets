import React, { Component } from 'react';

export default class GetUserInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationInfo: '',
        };
    }

    async componentDidMount() {
        await this.getGeoLocation();
    }

    getGeoLocation = () => {
        fetch('http://ip-api.com/json')
            .then(response => response.json())
            .then(results => this.setState({ locationInfo: results }))
            .catch((error) => { return error });
    }

    render() {
        const { locationInfo } = this.state;
        return (
            <div className="userlocation">
                <h1>Your Location Information: </h1>
                <div className="userlocation__country">Country: <span>{locationInfo.country}</span></div>
                <div className="userlocation__city">City: <span>{locationInfo.city}</span></div>
                <div className="userlocation__city">ISP: <span>{locationInfo.isp}</span></div>
                <div className="userlocation__city">Timezone: <span>{locationInfo.timezone}</span></div>
            </div>
        );
    }
}
