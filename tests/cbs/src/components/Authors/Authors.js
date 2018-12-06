import React from 'react';
import './Authors.scss';

const Author = ({ image, author, authorLink, description }) => 
    <article className="author">
        <div className="author-image">
            <img src={image} alt="" />
        </div>
        <div className="author-info">
            <div className="author-info__name"><a href={authorLink}>{author}</a></div>
            <div className="author-info__description"><p>{description}</p></div>
        </div>
        <div className="author-follow">
            <button className="author-follow__button">Follow</button>
        </div>
    </article>

export default Author;