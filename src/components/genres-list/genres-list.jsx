import React from 'react';
import PropTypes from 'prop-types';

export const GenresList = ({genres, genreFilter, onSelect}) => {
  const handleSelect = (e, genre) => {
    e.preventDefault();
    onSelect(genre);
  };
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li key={genre} className={`catalog__genres-item ${genre.toUpperCase() === genreFilter.toUpperCase() && `catalog__genres-item--active`}`}>
          <a onClick={(e) => handleSelect(e, genre)} href="#" className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  );
};

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  genreFilter: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
};

export default GenresList;
