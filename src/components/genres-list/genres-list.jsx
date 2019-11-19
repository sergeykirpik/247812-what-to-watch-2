import {connect} from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../reducer';


export const GenresList = ({genres, active, onSelect}) => {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li key={genre} className={`catalog__genres-item ${genre.toUpperCase() === active.toUpperCase() && `catalog__genres-item--active`}`}>
          <a onClick={(e) => onSelect(e, genre)} href="#" className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  );
};

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  active: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
};

const mapStateToProps = (state) => ({
  active: state.genreFilter,
});

const mapDispatchToProps = (dispatch) => ({
  onSelect: (e, genre) => {
    e.preventDefault();
    dispatch(ActionCreator.setGenreFilter(genre));
    dispatch(ActionCreator.getFilmsByGenre(genre));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
