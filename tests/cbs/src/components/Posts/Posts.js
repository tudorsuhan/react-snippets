import React from 'react';
import './Posts.scss';

const Posts = ({ image, title, titleLink, author, authorLink }) => 
    <article className="post">
        <div className="post-image">
            <img src={image} alt="" />
        </div>
        <div className="post-info">
            <div className="post-info__title"><a href={titleLink}>{title}</a></div>
            <div className="post-info__author"><a href={authorLink}>{author}</a></div>
        </div>
    </article>

export default Posts;