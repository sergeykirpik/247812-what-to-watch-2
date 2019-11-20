import React from 'react';
import PropTypes from 'prop-types';

import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';

const MoviesList = ({films, onSelectItem}) => {
  const handleMouseEnter = (filmData) => {
    onSelectItem(filmData);
  };
  return (
    <div className="catalog__movies-list">

      {films.map((film) => (
        <SmallMovieCard key={film.id}
          film={film}
          onMouseEnter={handleMouseEnter} />
      ))}

    </div>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        previewImage: PropTypes.string.isRequired
      })
  ).isRequired,
  onSelectItem: PropTypes.func
};

MoviesList.defaultProps = {
  onSelectItem: () => {}
};

export default MoviesList;
