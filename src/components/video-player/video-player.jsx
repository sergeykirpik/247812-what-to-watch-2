import React from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
  }

  render() {
    const {width, height, src, poster, muted} = this.props;
    return (
      <video
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
    if (!this.props.isPlaying) {
      return;
    }
    const video = this._videoRef.current;
    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => {});
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
