import React, { Component, Fragment } from 'react';
import './index.scss';
import Tabs from './Tabs/Tabs';
import Posts from './Posts/Posts';
import Authors from './Authors/Authors';
import FollowUsers from './FollowUsers/FollowUsers';
import axios from 'axios';
import PropTypes from 'prop-types';

const POSTS_URL = 'https://www.zoso.ro/wp-json/wp/v2/posts?_embed&per_page=20';
const USERS_URL = 'https://www.zoso.ro/wp-json/wp/v2/users?per_page=20';

export default class NavigationTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            users: [],
            loading: false,
            error: null
        }
    }
    componentDidMount() {
        this.getDataPosts();
        this.getDataUsers();
        /**
         * Refresh web service to get latest updates if exists at every 1 min
         */
        setInterval(() => {
            this.getDataPosts();
            this.getDataUsers();
            console.clear();
            console.log('Refresh..')
        }, 100000)
    }
    getDataPosts = () => {
        this.setState({ loading: true })
        axios.get(POSTS_URL)
            .then(result => this.setState({ posts: result.data, loading: false }))
            .catch(error => this.setState({ error, loading: false }))
    }
    getDataUsers = () => {
        this.setState({ loading: true })
        axios.get(USERS_URL)
            .then(result => this.setState({ users: result.data, loading: false }))
            .catch(error => this.setState({ error, loading: false }))
    }
    render() {
        const { posts, users, loading, error } = this.state;
        if (error) return <div>{error.message}</div>;
        return (
            <Fragment>
                <h1 className="app__title">CBS App</h1>
                <Tabs>
                    <div label="Posts">
                        {loading ? <div>Loading...</div> : 
                        posts.map(d => (
                            <Posts 
                                key={d.id}
                                image={d._embedded['wp:featuredmedia'][0] && d._embedded['wp:featuredmedia'][0].link}
                                title={d.title.rendered} 
                                titleLink={d.link}
                                author={d._embedded['author'][0].name}
                                authorLink={d._embedded['author'][0].link}
                            />
                        ))}
                    </div>
                    <div label="Authors">
                        {loading ? <div>Loading...</div> : 
                        users.map(d => (
                            <Authors 
                                key={d.id}
                                image={d.avatar_urls['96']}
                                author={d.name} 
                                authorLink={d.link}
                                description={d.description ? d.description : 'No description'}
                            />
                        ))}
                    </div>
                    <div label="Follow">
                        {loading ? <div>Loading...</div> : 
                        users.map(d => (
                            <FollowUsers 
                                key={d.id}
                                image={d.avatar_urls['96']}
                            />
                        ))}
                        <FollowUsers />
                    </div>
                </Tabs>
            </Fragment>
        );
    }
}

Posts.propTypes = {
    image: PropTypes.string,
    title: PropTypes.node,
    titleLink: PropTypes.string,
    author: PropTypes.node,
    authorLink: PropTypes.string
}

Authors.propTypes = {
    image: PropTypes.string,
    author: PropTypes.string,
    authorLink: PropTypes.string,
    description: PropTypes.string
}

FollowUsers.propTypes = {
    image: PropTypes.string
}