import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '../tabs/tabs.jsx';
import MoviesList from '../movies-list/movies-list.jsx';

const MoviePageDetails = (props) => {
  const {film, moreLikeThisFilms} = props;
  const {
    backgroundColor,
    backgroundImage,
    title,
    genre,
    released,
    posterImage,
  } = film;
  return <>
    <section className="movie-card movie-card--full" style={{backgroundColor}}>
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a href="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
              <a href="add-review.html" className="btn movie-card__button">Add review</a>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={posterImage} alt={`${title} poster`} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <Tabs film={film} />
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog catalog--like-this">
        {moreLikeThisFilms.length > 0 && <>
          <h2 className="catalog__title">More like this</h2>
          <MoviesList films={moreLikeThisFilms} />
        </>}
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="/" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </>;
};

const filmPropType = {
  backgroundColor: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number,
  posterImage: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  runTime: PropTypes.number.isRequired,
};

MoviePageDetails.defaultProps = {
  moreLikeThisFilms: [],
};

MoviePageDetails.propTypes = {
  film: PropTypes.shape(filmPropType),
  moreLikeThisFilms: PropTypes.arrayOf(PropTypes.shape(filmPropType)),
};

export default MoviePageDetails;
