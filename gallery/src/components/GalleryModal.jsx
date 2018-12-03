import React, { Component } from 'react'

export default class GalleryModal extends Component {
    render() {
        const { isOpen, name, src, onClick } = this.props;
        if(isOpen === false) {
            return null;
        }
        console.log(isOpen)

        return (
            <div className={"modal-overlay"} onClick={onClick} name={name}>
                <div className={"modal-body"}>
                    <a className={"modal-close"} href={""} onClick={onClick}>
                        <span className={"fa fa-times"}></span>
                    </a>
                    <img src={src} alt="" />
                </div>
            </div>
        );
    }
}
