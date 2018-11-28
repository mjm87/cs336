import React from 'react';
import ReactDOM from 'react-dom';

import CommentBox from './CommentBox.js';

import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={CommentBox}/>
    </Router>
    ), document.getElementById('content')
)