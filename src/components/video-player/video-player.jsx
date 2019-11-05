import React from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: this.props.isPlaying,
    };

    this._videoRef = React.createRef();
  }

  render() {
    const {width, height, src, poster, muted} = this.props;
    return (
      <video
        onClick={() => this.setState(({isPlaying}) => ({isPlaying: !isPlaying}))}
        ref={this._videoRef}
        width={width}
        height={height}
        src={src}
        poster={poster}
        muted={muted}
      />
    );
  }

  componentDidMount() {
    this._handleStateUpdate();
  }

  componentDidUpdate() {
    this._handleStateUpdate();
  }

  _play() {
    const video = this._videoRef.current;
    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => {});
    }
  }

  _pause() {
    const video = this._videoRef.current;
    video.pause();
  }

  _handleStateUpdate() {
    const {isPlaying} = this.state;

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
