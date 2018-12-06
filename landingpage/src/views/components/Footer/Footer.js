import React, { Component } from 'react';
import './Footer.css';

class Brand extends Component {
    render() {
        return (
            <div className="brand">
                <div className="brand__name">
                    <h1>Devio</h1>
                </div>
                <div className="brand__contact">
                    <div className="bc-header">Head Office</div>
                    <div className="headoffice">
                        <h3 className="headoffice__name">Tudor Suhan</h3>
                        <span className="headoffice__phone">0740 104 540</span>
                    </div>
                </div>
            </div>
        );
    }
}

class Company extends Component {
    render() {
        return(
            <div className="company">
                <header className="company__header">Company</header>
                <ul className="ul">
                    <li className="ul__li"><a href="">What we do?</a></li>
                    <li className="ul__li"><a href="">Story</a></li>
                    <li className="ul__li"><a href="">Services</a></li>
                    <li className="ul__li"><a href="">Our process</a></li>
                    <li className="ul__li"><a href="">Our promise</a></li>
                    <li className="ul__li"><a href="">Values</a></li>
                    <li className="ul__li"><a href="">Contact</a></li>
                    <li className="ul__li"><a href="">Privacy policy</a></li>
                </ul>
            </div>
        );
    }
}

class Navigate extends Component {
    render() {
        return(
            <div className="network">
                <header className="network__header">Navigate</header>
                <ul className="ul">
                    <li className="ul__li"><a href="">Projects</a></li>
                    <li className="ul__li"><a href="">Clients</a></li>
                    <li className="ul__li"><a href="">Technologies</a></li>
                    <li className="ul__li"><a href="">Pricing</a></li>
                </ul>
            </div>
        );
    }
}

class SocialMedia extends Component {
    render() {
        return(
            <div className="socialmedia">
                <header className="media__header">Media</header>
                <ul className="ul">
                    <li className="ul__li">
                        <a href="" target="_blank">Facebook</a>
                    </li>
                    <li className="ul__li">
                        <a href="" target="_blank">Twitter</a>
                    </li>
                    <li className="ul__li">
                        <a href="" target="_blank">LinkedIn</a>
                    </li>
                    <li className="ul__li">
                        <a href="" target="_blank">Instagram</a>
                    </li>
                    <li className="ul__li">
                        <a href="" target="_blank">Whatsapp</a>
                    </li>
                </ul>
            </div>
        );
    }
}

class Copyright extends Component {
    render() {
        return(
            <div className="copyright">
                <p> Copyright &#169; 2018 Devio. All rights reserved. </p>
            </div>
        );
    }
}

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">

                <div className="wrapper">
                    <Brand />
                    <Company />
                    <Navigate />
                    <SocialMedia />
                </div>

                <Copyright />
            </footer>
        );
    }
}
