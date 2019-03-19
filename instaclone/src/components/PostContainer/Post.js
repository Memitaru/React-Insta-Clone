import React from 'react';
import './Post.css';
import CommentSection from "../CommentSection/CommentSection";

const Post = props => {
    return(
        <div className="post">
        <div className="post-header">
        <img className="profile-pic" src={props.post.thumbnailUrl} alt=""/>
        <h3>{props.post.username}</h3>
        </div>
        <div className="post-image-container">
        <img className="post-image" src={props.post.imageUrl} alt="" />
        </div>
        <CommentSection comments={props.post.comments}/>
        </div>
    )
}

export default Post;