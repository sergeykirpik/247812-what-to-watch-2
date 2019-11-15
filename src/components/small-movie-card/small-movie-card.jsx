import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';

const PREVIEW_START_TIMEOUT = 1000;

class SmallMovieCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };

    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);
    this._handleMouseClick = this._handleMouseClick.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(this._timerId);
  }

  render() {
    const {isPlaying} = this.state;
    const {muted, film, onTitleClick} = this.props;
    const {title, previewImage, previewVideoLink} = film;

    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseEnter={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}
        onClick={this._handleMouseClick}>

        <React.Fragment>
          <div className="small-movie-card__image">
            <VideoPlayer
              onMouseLeave={this._handleMouseLeave}
              width={280}
              height={175}
              src={previewVideoLink}
              poster={previewImage}
              muted={muted}
              isPlaying={isPlaying}
              key={isPlaying} />
          </div>
          {!isPlaying && (
            <h3 className="small-movie-card__title">
              <a onClick={onTitleClick} className="small-movie-card__link" href={this._detailsUrl}>{title}</a>
            </h3>
          )}
        </React.Fragment>

      </article>
    );
  }

  _handleMouseEnter() {
    const {onMouseEnter, film} = this.props;
    onMouseEnter(film);
    this._timerId = setTimeout(() => {
      this._timerId = null;
      this.setState({
        isPlaying: true,
      });
    }, PREVIEW_START_TIMEOUT);
  }

  _handleMouseLeave() {
    clearTimeout(this._timerId);
    this._timerId = null;
    this.setState({
      isPlaying: false,
    });
  }

  _handleMouseClick() {
    location.assign(this._detailsUrl);
  }

  get _detailsUrl() {
    return `/details?${this.props.film.id}`;
  }
}

SmallMovieCard.defaultProps = {
  muted: true,
  previewVideoLink: ``,
  onTitleClick: () => {},
  onMouseEnter: () => {},
};

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string,
  }).isRequired,
  muted: PropTypes.bool.isRequired,
  onTitleClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
};

export default SmallMovieCard;
