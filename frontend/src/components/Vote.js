import React, { Component } from 'react';

class Vote extends Component {
  handleVoteUp = () => {
    this.props.votePost(this.props.blogId, 'up');
  };

  handleVoteDown = () => {
    this.props.votePost(this.props.blogId, 'down');
  };

  render() {
    return (
      <div className="Vote">
        <div>{this.props.vote} votes.</div>
        <i
          className="fas fa-thumbs-up text-success"
          onClick={this.handleVoteUp}
        />{' '}
        <i
          className="fas fa-thumbs-down text-danger"
          onClick={this.handleVoteDown}
        />
      </div>
    );
  }
}

export default Vote;
