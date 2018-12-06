import React, { Component } from 'react';
import './Social.css';
import Whatsapp from './Whatsapp/Whatsapp.js';
import Facebook from './Facebook/Facebook.js';
import Instagram from './Instagram/Instagram.js';

export default class Social extends Component {
    render() {
        return (
            <div className="media">
                <Whatsapp />
                <Facebook />
                <Instagram />
            </div>
        );
    }
}
