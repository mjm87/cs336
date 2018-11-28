import React from 'react';
import Remarkable from 'remarkable';

import '../css/base.css';

// Comment
module.exports = React.createClass({
    rawMarkup: function() {
        var md = new Remarkable();
        md.set({breaks:true});
        var rawMarkup = md.render("ID: " + this.props.id + "\nSeniority: " + this.props.years);
        return { __html: rawMarkup };
    },
    render: function() {
        return (
        <div className="comment">
            <h2 className="commentAuthor">
            {this.props.name}
            </h2>
            <span dangerouslySetInnerHTML={this.rawMarkup()} />
        </div>
        );
    }
});