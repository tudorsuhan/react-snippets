import React, { Component } from 'react';
import './FollowUsers.scss';

export default class FollowUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            motion: false
        }
        this.avatar = React.createRef();
    }
    componentDidMount() {
        this.handleFollowUserEffect();
    }
    handleFollowUserEffect = () => {
        const node = this.avatar.current;
        const userAvatar = node.querySelector('.author-follow-u-image');
        const userFollowButton = node.querySelector('.author-follow-u-button__button');
        userFollowButton.addEventListener('click', () => {
            userAvatar.classList.toggle('isAnimated');
            userFollowButton.classList.toggle('isFollowing');
            if (userFollowButton.classList.contains('isFollowing')) {
                userFollowButton.childNodes[0].remove();
                const following = document.createTextNode('Following');
                userFollowButton.appendChild(following);
            } else if (!userFollowButton.classList.contains('isFollowing')) {
                userFollowButton.childNodes[0].remove();
                const follow = document.createTextNode('Follow');
                userFollowButton.appendChild(follow);
            }
        }, false)
    }
    render() {
        const { image } = this.props;
        return (
            <article className="author-follow-u" ref={this.avatar}>
                <div className="author-follow-u-image">
                    <img src={image} alt="" />
                </div>
                <div className="author-follow-u-button">
                    <button className="author-follow-u-button__button">Follow</button>
                </div>
            </article>
        )
    }
}