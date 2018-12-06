import React, { Component } from 'react'
import imgUrls from './data/data'
import GalleryImage from './components/GalleryImage'
import GalleryModal from './components/GalleryModal'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            url: ''
        }
    }

    openModal = (url, e) => {
        e.preventDefault();
        this.setState({
            showModal: true,
            url: url
        });
    }

    closeModal = () => {
        this.setState({
            showModal: false,
            url: ''
        });
    }
    
    render() {
        return (
             <div refs="gallery-container" className="container-fluid gallery-container">
                <div className="row">
                    {
                        imgUrls.map((url, index) => {
                            return <div className="col-sm-6 col-md-3 col-xl-2" key={index}>
                                <div className="gallery-card">
                                    <GalleryImage className="gallery-thumbnail" src={url} alt={'Image number ' + (index + 1)} />
                                    <span className="card-icon-open fa fa-expand" value={url} onClick={(e) => this.openModal(url, e)}></span>
                                </div>
                            </div>
                        })
                    }
                </div>
                <GalleryModal isOpen={this.state.showModal} onClick={this.closeModal} src={this.state.url} />
             </div>
        );
    }
}