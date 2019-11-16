import React from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends React.PureComponent {

  constructor(props) {
    super(props);
    this._videoRef = React.createRef();
  }

  render() {
    const {width, height, poster, muted} = this.props;
    return (
      <video
        ref={this._videoRef}
        width={width}
        height={height}
        poster={poster}
        muted={muted}
      />
    );
  }

  componentDidMount() {
    this._handleComponentUpdate();
  }

  componentDidUpdate() {
    this._handleComponentUpdate();
  }

  _play() {
    const video = this._videoRef.current;
    if (!video) {
      return;
    }
    video.src = this.props.src;
    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => {});
    }
  }

  _pause() {
    const video = this._videoRef.current;
    if (!video) {
      return;
    }
    video.pause();
    video.src = ``;
  }

  _handleComponentUpdate() {
    const {isPlaying} = this.props;

    if (isPlaying) {
      this._play();
    } else {
      this._pause();
    }
  }
}

VideoPlayer.defaultProps = {
  muted: true,
  src: ``,
  poster: ``,
  isPlaying: false,
};

VideoPlayer.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  src: PropTypes.string,
  poster: PropTypes.string,
  isPlaying: PropTypes.bool,
  muted: PropTypes.bool,
};

export default VideoPlayer;
