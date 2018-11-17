import React from 'react';

import '../css/base.css';

// Comment Form
module.exports = React.createClass({
  getInitialState: function() {
    return {author: '', text: '', years: ''};
  },
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSeniorityChange: function(e) {
    this.setState({years: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    var years = this.state.years.trim();
    if (!text || !author || !years) {
      return;
    }
    this.props.onCommentSubmit({name: author, id: text, years: years});
    this.setState({author: '', text: '', years: ''});
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your ID"
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input
          type="text"
          placeholder="Your Name"
          value={this.state.author}
          onChange={this.handleAuthorChange}  
        />
        <input
          type="text"
          placeholder="Your Seniority"
          value={this.state.years}
          onChange={this.handleSeniorityChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
});