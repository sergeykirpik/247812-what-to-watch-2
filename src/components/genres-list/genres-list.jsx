import React from 'react';
import PropTypes from 'prop-types';

const handleSelectItem = (e, genre, onSelectItem) => {
  e.preventDefault();
  onSelectItem(genre);
};

export const GenresList = (props) => {
  const {genres, activeItem, onSelectItem} = props;
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li key={genre} className={`catalog__genres-item ${genre.toUpperCase() === (activeItem || `All genres`).toUpperCase() && `catalog__genres-item--active`}`}>
          <a onClick={(e) => handleSelectItem(e, genre, onSelectItem)} href="#" className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  );
};

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  activeItem: PropTypes.string,
  onSelectItem: PropTypes.func.isRequired,
};

GenresList.defaultProps = {
  activeItem: `All genres`
};

export default GenresList;
