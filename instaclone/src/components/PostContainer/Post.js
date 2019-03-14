import React from 'react';
import './Post.css';

const Post = props => {
    return(
        <div className="post">
        <div className="post-header">
        <img className="profile-pic" src={props.post.thumbnailUrl} />
        <h3>{props.post.username}</h3>
        </div>
        <div className="post-image-container">
        <img className="post-image" src={props.post.imageUrl} />
        </div>
        </div>
    )
}

export default Post;