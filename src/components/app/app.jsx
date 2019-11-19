import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen.jsx';
import MoviePageDetails from '../movie-page-details/movie-page-details.jsx';

export const App = (props) => {
  const {films, genres} = props;
  switch (location.pathname) {
    case `/`:
      return <MainScreen genres={genres} />;
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

App.defaultProps = {
  genres: [`All genres`]
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
  })),
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default App;
