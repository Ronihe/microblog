import React, { Component } from 'react';
// Uses container

class Comment extends Component {
  delete = () => {
    this.props.deleteCommentToAPI(this.props.blogId, this.props.comment.id);
  };

  render() {
    return (
      <p>
        {this.props.comment.text}

        <i className="fa fa-times text-danger mr-2" onClick={this.delete} />
      </p>
    );
  }
}

Comment.defaultProps = {};

Comment.propTypes = {};

export default Comment;
