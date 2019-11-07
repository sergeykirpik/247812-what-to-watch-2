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
      const filmId = parseInt(location.search.slice(1), 10);
      const film = films.find((it) => it.id === filmId);
      const moreLikeThisFilms = films.filter(({genre, id}) => genre === film.genre && id !== film.id).slice(0, 4);
      return <MoviePageDetails
        film={film}
        moreLikeThisFilms={moreLikeThisFilms} />;
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
