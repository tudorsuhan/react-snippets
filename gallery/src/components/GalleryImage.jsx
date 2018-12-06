import React, { Component } from 'react'

export default class GalleryImage extends Component {
    render() {
        const { className, src, alt } = this.props;
        return (
            <img className={className} src={src} alt={alt} />
        );
    }
}

