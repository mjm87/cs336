import React from 'react';
import $ from 'jquery';

import CommentList from './CommentList.js';
import CommentForm from './CommentForm.js';
import '../css/base.css';

// Comment Box
module.exports = React.createClass({
    loadCommentsFromServer: function() {
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        cache: false,
        success: function(data) {
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    },
    handleCommentSubmit: function(comment) {
      var comments = this.state.data;
      var newComments = comments.concat([comment]);
      this.setState({data: newComments});
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        type: 'POST',
        data: comment,
        success: function(data) {
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err) {
          this.setState({data: comments});
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    },
    getInitialState: function() {
      return {data: []};
    },
    componentDidMount: function() {
      this.loadCommentsFromServer();
      setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },
    render: function() {
      return (
        <div className="commentBox">
          <h1>Directory</h1>
          <CommentList data={this.state.data} />
          <CommentForm onPersonSubmit={this.handleCommentSubmit} />
        </div>
      );
    }
  });