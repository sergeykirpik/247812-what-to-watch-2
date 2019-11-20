import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import MainScreen from '../main-screen/main-screen.jsx';
import MoviePageDetails from '../movie-page-details/movie-page-details.jsx';
import {ActionCreator} from '../../reducer.js';

export const App = (props) => {
  const {films, genres, genreFilter, filmsByGenre, onSelectGenre} = props;
  switch (location.pathname) {
    case `/`:
      return <MainScreen
        genres={genres}
        genreFilter={genreFilter}
        films={filmsByGenre}
        onSelectGenre={onSelectGenre} />;
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
  genres: [`All genres`],
  genreFilter: `All genres`
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
  })),
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  genreFilter: PropTypes.string.isRequired,
  filmsByGenre: PropTypes.arrayOf(PropTypes.object.isRequired),
  onSelectGenre: PropTypes.func
};

const mapStateToProps = (state) => ({
  filmsByGenre: state.filmsByGenre,
  genreFilter: state.genreFilter
});

const mapDispatchToProps = (dispatch) => ({
  onSelectGenre: (genre) => {
    dispatch(ActionCreator.setGenreFilter(genre));
    dispatch(ActionCreator.getFilmsByGenre(genre));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
