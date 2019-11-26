import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import App from './components/app/app.jsx';

import reducer, {Operation} from './reducer';

import {configureAPI} from './api';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(configureAPI()))
);

store.dispatch(Operation.getFilms());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);

