import React from 'react';
import './CommentSection.css';
import Comment from "./Comment";

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        };
    }

    render(){
        return(
        <div className="comment-container">
        {this.state.comments.map((comment, i) => <Comment comment={comment} key={i} />)}
        </div>
        )
    }
}

export default CommentSection;