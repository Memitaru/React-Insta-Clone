import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';
import Comment from "./Comment";

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // comments: props.comments
        };
    }

    // componentDidMount() {
    //     this.setState({
    //         comments: props.comments
    //     })
    // }

    render(){
        return(
        <div className="comment-container">
        {this.props.comments.map((comment, i) => <Comment comment={comment} key={i} />)}
        </div>
        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape(
            {text: PropTypes.string, 
            username: PropTypes.string}
            )
    )
}

export default CommentSection;