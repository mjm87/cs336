import React from 'react';

import '../css/base.css';

// New Person Form
module.exports = React.createClass({
  getInitialState: function() {
    return {name: '', id: '', years: ''};
  },
  handleNameChange: function(e) {
    this.setState({author: e.target.value});
  },
  handleIdChange: function(e) {
    this.setState({id: e.target.value});
  },
  handleSeniorityChange: function(e) {
    this.setState({years: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var id = this.state.id.trim();
    var years = this.state.years.trim();
    if (!id || !author || !years) {
      return;
    }
    this.props.onPersonSubmit({name: author, id: id, years: years});
    this.setState({author: '', id: '', years: ''});
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your ID"
          value={this.state.id}
          onChange={this.handleIdChange}
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