import React, { Component } from 'react';
import './Image.css';
import PricingImage from '../../../../assets/images/pricing/pricing.svg';

export default class Image extends Component {
    render() {
        return (
            <div className="pricing-image">
                <img src={PricingImage} alt="Pricing" />
            </div>
        );
    }
}