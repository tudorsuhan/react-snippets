import React, { Component } from 'react';
import './Cards.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/ajax-loader.gif';
import Slick from 'react-slick';
// import NextArrow from '../../../../utils/arrows/next.js';
// import PrevArrow from '../../../../utils/arrows/prev.js';

import ListenIcon from '../../../../assets/images/process/listen.svg';
import PlanningIcon from '../../../../assets/images/process/planning.svg';
import DesignIcon from '../../../../assets/images/process/design.svg';
import DevelopmentIcon from '../../../../assets/images/process/development.svg';
import TestingDeliveryIcon from '../../../../assets/images/process/testingdelivery.svg';
import MaintenanceIcon from '../../../../assets/images/process/maintenance.svg';

export default class Cards extends Component {

    render() {

        const processCardIcon = [
            ListenIcon,
            PlanningIcon,
            DesignIcon,
            DevelopmentIcon,
            TestingDeliveryIcon,
            MaintenanceIcon
        ];

        const processCardName = [
            'Listen',
            'Planning',
            'Design',
            'Development',
            'Testing & Delivery',
            'Maintenance'
        ];

        const cardClass = [
            'op-card op-card--listen',
            'op-card op-card--planning',
            'op-card op-card--design',
            'op-card op-card--development',
            'op-card op-card--delivery',
            'op-card op-card--maintenance'
        ];

        const settings = {
            dots: false,
            infinite: true,
            arrows: false,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            // nextArrow: <NextArrow />,
            // prevArrow: <PrevArrow />
        };
        
        return (
            <div className="grid">
                <Slick {...settings} >
                    {
                        processCardIcon.map((i, j) => {
                            return <figure className={cardClass[j]} key={processCardName[j]} >
                                <div className="op-card__icon">
                                    <img src={i} alt={processCardName[j]} />
                                </div>
                                <div className="op-card__name">{processCardName[j]}</div>
                                <div className="op-card__number">.0{j}</div>
                            </figure>
                        })
                    }
                </Slick>
            </div>
        );
    }
}
