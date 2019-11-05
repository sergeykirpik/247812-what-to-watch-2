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
  }

  render() {
    const {isPlaying} = this.state;
    const {muted, film, onTitleClick} = this.props;
    const {title, previewImage, id, previewVideoLink} = film;
    const detailsUrl = `/details?${id}`;

    const handleClick = () => {
      location.assign(detailsUrl);
    };

    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseEnter={() => this._handleMouseEnter(film)}
        onMouseLeave={() => this._handleMouseLeave()}
        onClick={handleClick}>

        {!isPlaying ? (
          <React.Fragment>
            <div className="small-movie-card__image">
              <img src={previewImage} alt={title} width="280" height="175" />
            </div>
            <h3 className="small-movie-card__title">
              <a onClick={onTitleClick} className="small-movie-card__link" href={detailsUrl}>{title}</a>
            </h3>
          </React.Fragment>
        ) : (
          <VideoPlayer
            onMouseLeave={() => this._handleMouseLeave()}
            width={280}
            height={175}
            src={previewVideoLink}
            poster={previewImage}
            muted={muted}
            isPlaying={isPlaying} />
        )}

      </article>
    );
  }

  componentDidUpdate() {
    return;
    const {isPlaying} = this.state;
    const video = this._videoRef.current;

    if (isPlaying) {
      const playPromise = video.play();
      if (playPromise) {
        playPromise.catch(() => {});
      }
    }
  }

  _handleMouseEnter(film) {
    this.props.onMouseEnter(film);
    this._timerHandler = setTimeout(() => {
      this._timerHandler = null;
      this.setState({
        isPlaying: true,
      });
    }, PREVIEW_START_TIMEOUT);
  }

  _handleMouseLeave() {
    clearTimeout(this._timerHandler);
    this._timerHandler = null;
    this.setState({
      isPlaying: false,
    });
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
