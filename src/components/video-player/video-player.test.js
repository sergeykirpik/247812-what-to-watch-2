import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player.jsx';

it(`renders correctly`, () => {
  const tree = renderer.create(
      <VideoPlayer
        width={280}
        height={175}
        src="some_preview_link"
        poster="some_poster_image"
        muted={false}
        isPlaying={false}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
