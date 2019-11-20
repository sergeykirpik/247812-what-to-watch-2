import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './components/app/app.jsx';

import films from './mocks/films2';
import reducer from './reducer';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

const getGenres = (allFilms) => {
  return [`All genres`, ...new Set(allFilms.map((it) => it.genre))];
};

ReactDOM.render(
    <Provider store={store}>
      <App films={films} genres={getGenres(films)}/>
    </Provider>,
    document.querySelector(`#root`)
);

