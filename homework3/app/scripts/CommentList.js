import React from 'react';

import Comment from './Comment.js';
import '../css/base.css';

// Comment List
module.exports = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.name} key={comment.id} id={comment.id} years={comment.years}/>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});