import React, { Component } from 'react';
import './Cards.css';

import Client1 from '../../../../assets/images/clients/company-1.png';
import Client2 from '../../../../assets/images/clients/company-2.png';
import Client3 from '../../../../assets/images/clients/company-3.png';
import Client4 from '../../../../assets/images/clients/company-4.png';

export default class Cards extends Component {
    render() {

        const clients = [
            'Softwsp',
            'Dulcipass',
            'Mybucharestguide',
            'Asedya'
        ];

        const clientLogo = [
            Client1,
            Client2,
            Client3,
            Client4
        ];

        const links = [
            'http://softwsp.com',
            'https://investor-visa.co.uk/',
            'https://dulcipass.net/'
        ];

        return (
            <div className="clients">
                {
                    clientLogo.map((i, j) => {
                        return <div className="client" title={clients[j]} key={clients[j]}>
                            <a href={links[j]} target="_blank">
                                <img src={i} alt={clients[j]} />
                            </a>
                        </div>
                    })
                }
            </div>
        );
    }
}
