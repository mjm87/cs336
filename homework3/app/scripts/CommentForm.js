import React from 'react';

import '../css/base.css';

// New Person Form
module.exports = React.createClass({
  getInitialState: function() {
    return {name: '', id: '', years: ''};
  },
  handleNameChange: function(e) {
    this.setState({name: e.target.value});
  },
  handleIdChange: function(e) {
    this.setState({id: e.target.value});
  },
  handleSeniorityChange: function(e) {
    this.setState({years: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var name = this.state.name.trim();
    var id = this.state.id.trim();
    var years = this.state.years.trim();
    if (!id || !name || !years) {
      return;
    }
    this.props.onPersonSubmit({name: name, id: id, years: years});
    this.setState({name: '', id: '', years: ''});
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
          value={this.state.name}
          onChange={this.handleNameChange}  
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