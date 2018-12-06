import React, { Component } from 'react';
import Clients from '../../components/Clients/Clients.js';
import Contact from '../../components/Contact/Contact.js';
import Footer from '../../components/Footer/Footer.js';
import Header from '../../components/Header/Header.js';
import Navbar from '../../components/Navbar/Navbar.js';
import Pricing from '../../components/Pricing/Pricing.js';
import Process from '../../components/Process/Process.js';
import Projects from '../../components/Projects/Projects.js';
import Promise from '../../components/Promise/Promise.js';
import RequestOffer from '../../components/RequestOffer/RequestOffer.js';
import Services from '../../components/Services/Services.js';
import Story from '../../components/Story/Story.js';
import Whatwedo from '../../components/Whatwedo/Whatwedo.js';

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Header />
                <RequestOffer />
                <Whatwedo />
                <Story />
                <Services />
                <Process />
                <Promise />
                <Projects />
                <Clients />
                <Pricing />
                <Contact />
                <Footer />
            </React.Fragment>
        );
    }
}
