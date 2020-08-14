import React, { Component } from 'react';

class Comment extends Component {
  render() {
    const { text } = this.props;

    const commentStyle = {
      fontSize: '0.9rem',
      fontWeight: 500,
      lineHeight: 1.5,
      whiteSpace: 'pre-wrap',
    };

    return (
      <div className='w-100 mx-4 d-flex'>
        <div className='w-100 px-2'>
          <span className='d-block text-secondary' style={commentStyle}>
            {text}
          </span>
        </div>
      </div>
    );
  }
}

export default Comment;
