import React, { Component } from 'react';
import './Cards.css';

import Days365 from '../../../../assets/images/promise/365.svg';
import Browser from '../../../../assets/images/promise/browser.svg';
import Code from '../../../../assets/images/promise/code.svg';
import Responsive from '../../../../assets/images/promise/responsive.svg';
import Seo from '../../../../assets/images/promise/seo.svg';

class PromiseCard extends Component {

    render() {

        const promiseCardIcon = [
            Days365,
            Browser,
            Code,
            Responsive,
            Seo
        ];

        const promiseCardName = [
            '365 days free support',
            'Cross browser compatibility',
            'Clean programming',
            'Responsiveness',
            'SEO semantic coding'
        ]

        return(
            <React.Fragment>
                {
                    promiseCardIcon.map((i, j) => {
                        return <figure className="promise" key={promiseCardName[j]} >
                            <div className="promise__identity">
                                <img src={i} alt={promiseCardName[j]} />
                            </div>
                            <div className="promise__title">{promiseCardName[j]}</div>
                        </figure>
                    })
                }
            </React.Fragment>
        );
    }
}

export default class Cards extends Component {
    render() {
        return(
            <div className="promises">
                <PromiseCard />
            </div>
        );
    }
}
