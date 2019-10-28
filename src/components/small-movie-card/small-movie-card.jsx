import React from 'react';
import Proptypes from 'prop-types';

const SmallMovieCard = (props) => {
  const {film, onTitleClick, onMouseEnter} = props;
  const {title, previewImage, id} = film;
  const detailsUrl = `/details?${id}`;

  const handleClick = () => {
    location.assign(detailsUrl);
  };

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onMouseEnter(film)} onClick={handleClick}>
      <div className="small-movie-card__image">
        <img src={previewImage} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a onClick={onTitleClick} className="small-movie-card__link" href={detailsUrl}>{title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  film: Proptypes.shape({
    id: Proptypes.number.isRequired,
    title: Proptypes.string.isRequired,
    previewImage: Proptypes.string.isRequired
  }).isRequired,
  onTitleClick: Proptypes.func,
  onMouseEnter: Proptypes.func,
};

export default SmallMovieCard;
