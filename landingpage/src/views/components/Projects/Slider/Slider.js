import React, { Component } from 'react';
import './Slider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/ajax-loader.gif';
import Slick from 'react-slick';
// import NextArrow from '../../../../utils/arrows/next.js';
// import PrevArrow from '../../../../utils/arrows/prev.js';

import SoftwspProject from '../../../../assets/images/projects/softwsp.png';
import DulcipassProject from '../../../../assets/images/projects/dulcipass.png';
import InvestorVisaProject from '../../../../assets/images/projects/investor-visa.png';

class ProjectName extends Component {

    render() {

        const names = [
            'Softwsp',
            'Dulcipass',
            'Investor Visa'
        ];

        const images = [
            SoftwspProject,
            DulcipassProject,
            InvestorVisaProject
        ];

        const settings = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            // nextArrow: <NextArrow />,
            // prevArrow: <PrevArrow />
        };

        return(
            <Slick {...settings} >
                {
                    names.map((i, j) => {
                        return <div className="project" title={names[j]} key={names[j]}>
                            <div className="project__shape"></div>
                            <div className="project__name">{i}</div>
                            <div className="project__image" target="_blank">
                                <img src={images[j]} alt={names[j]} />
                            </div>
                        </div>
                    })
                }
            </Slick>
        );
    }
}

export default class Slider extends Component {

    render() {
        
        return (
            <div className="projects">
                <div className="projects-slider">
                    <ProjectName />
                </div>
            </div>
        );
    }
}
