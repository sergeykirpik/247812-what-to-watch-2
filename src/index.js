import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

import mockData from './data';

ReactDOM.render(
    <App films={mockData}/>,
    document.querySelector(`#root`)
);
