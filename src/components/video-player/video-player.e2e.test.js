import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import VideoPlayer from './video-player.jsx';

configure({adapter: new Adapter()});

it(`has two states: isPlaying = (true|false)`, () => {

  const wrapper = shallow(
      <VideoPlayer isPlaying={false} />
  );
  expect(wrapper.state(`isPlaying`)).toBe(false);

  wrapper.setState({isPlaying: true});
  expect(wrapper.state(`isPlaying`)).toBe(true);
});
