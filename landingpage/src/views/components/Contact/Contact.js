import React, { Component } from 'react';
import './Contact.js';
import HugeText from './HugeText/HugeText.js';
import Form from './Form/Form.js';
// import Information from './Information/Information.js';

export default class Contact extends Component {
    render() {
        return (
            <section className="section section--contact">
                <div className="wrapper">
                    <div className="contact" id="contact">
                        <HugeText />
                        <Form />
                        {/* <Information /> */}
                    </div>
                    <div className="information-paragraph">
                        <p>Send us an email or contact us directly at one of the phone numbers.</p>
                    </div>
                </div>
            </section>
        );
    }
}
