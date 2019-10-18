import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SmallMovieCard from './small-movie-card.jsx';

configure({adapter: new Adapter()});

it(`correctly handles click on title`, () => {

  const handleTitleClick = jest.fn();
  const wrapper = shallow(
      <SmallMovieCard
        title=""
        imgUrl=""
        onTitleClick={handleTitleClick} />
  );
  wrapper.find(`.small-movie-card__link`).simulate(`click`);

  expect(handleTitleClick).toHaveBeenCalledTimes(1);
});

