import React, { Component } from 'react';
import Burger from './Burger/Burger.js';
import Brand from './Brand/Brand.js';
import Phone from './Phone/Phone.js';
import Social from './Social/Social.js';
import Menu from '../Menu/Menu.js';
import './Navbar.css';

class Separator extends Component {
    render() {
        return(
            <span className="separator">|</span>
        );
    }
}

export default class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleToggle = (e) => {
        e.preventDefault();
        this.setState((prevState) => ({
            open: !prevState.open
        }));
    };

    render() {

        const { open } = this.state;

        return (
            <React.Fragment>
                <nav className={open ? 'navbar noshadow' : 'navbar'}>
                    <div className="wrapper">
                        <Brand />
                        <div className="utilities">
                            <Phone />
                            <Separator />
                            <Social />
                            <Burger className={open ? 'burger burger-open' : 'burger'} onClick={this.handleToggle} />
                        </div>
                    </div>
                </nav> 
                <Menu className={open ? 'sidenav is-open' : 'sidenav'} ref={node => { this.node = node; }} />
            </React.Fragment>
        );
    }
}
