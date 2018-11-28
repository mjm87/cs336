import React from 'react';
import ReactDOM from 'react-dom';

import CommentBox from './CommentBox.js';

ReactDOM.render(
    <CommentBox url="/people" pollInterval={2000} />,
    document.getElementById('content')
)


