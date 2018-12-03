import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/ajax-loader.gif';

export default function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style}}
            onClick={onClick} >
            <img src="http://pixsector.com/cache/81183b13/avcc910c4ee5888b858fe.png" alt="" />
        </div>
    );
}