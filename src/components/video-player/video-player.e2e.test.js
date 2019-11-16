import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import VideoPlayer from './video-player.jsx';

configure({adapter: new Adapter()});

it(`has two states: isPlaying = (true|false)`, () => {

  const wrapper = shallow(
      <VideoPlayer isPlaying={false} />
  );

  const play = jest.fn();
  const pause = jest.fn();

  wrapper.instance()._play = play;
  wrapper.instance()._pause = pause;

  wrapper.setProps({isPlaying: false});
  wrapper.update();
  expect(pause).toHaveBeenCalled();

  wrapper.setProps({isPlaying: true});
  wrapper.update();
  expect(play).toHaveBeenCalled();

});
