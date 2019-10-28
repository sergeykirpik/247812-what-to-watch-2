import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen.jsx';
import MoviePageDetails from '../movie-page-details/movie-page-details.jsx';

const App = (props) => {
  const {films} = props;
  switch (location.pathname) {
    case `/`:
      return <MainScreen films={films} />;
    case `/details`:
      const id = parseInt(location.search.slice(1), 10);
      const film = films.find((it) => it.id === id);
      return <MoviePageDetails film={film} />;
  }
  return null;
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
  })),
};

export default App;
