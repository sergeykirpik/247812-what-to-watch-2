import React from 'react';
import Proptypes from 'prop-types';

const SmallMovieCard = (props) => {
  const {film, onTitleClick, onMouseEnter} = props;
  const {title, imgUrl} = film;
  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onMouseEnter(film)}>
      <div className="small-movie-card__image">
        <img src={imgUrl} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a onClick={onTitleClick} className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  film: Proptypes.shape({
    id: Proptypes.number.isRequired,
    title: Proptypes.string.isRequired,
    imgUrl: Proptypes.string.isRequired
  }).isRequired,
  onTitleClick: Proptypes.func,
  onMouseEnter: Proptypes.func,
};

export default SmallMovieCard;
