import React from 'react';
import Proptypes from 'prop-types';

const SmallMovieCard = (props) => {
  const {title, imgUrl} = props;
  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={imgUrl} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  title: Proptypes.string.isRequired,
  imgUrl: Proptypes.string.isRequired,
};

export default SmallMovieCard;
