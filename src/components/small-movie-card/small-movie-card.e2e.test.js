import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SmallMovieCard from './small-movie-card.jsx';

import films from '../../mocks/films';

configure({adapter: new Adapter()});

it(`correctly handles click on title`, () => {

  const handleTitleClick = jest.fn();
  const wrapper = shallow(
      <SmallMovieCard
        film={films[0]}
        onTitleClick={handleTitleClick} />
  );
  wrapper.find(`.small-movie-card__link`).simulate(`click`);


  expect(handleTitleClick).toHaveBeenCalledTimes(1);
});

it(`correctly handles mouse enter event`, () => {

  const film = films[0];
  const handleMouseEnter = jest.fn();
  const wrapper = shallow(
      <SmallMovieCard
        film={film}
        onMouseEnter={handleMouseEnter} />
  );
  wrapper.find(`.small-movie-card`).simulate(`mouseenter`);

  expect(handleMouseEnter).toHaveBeenCalledTimes(1);
  expect(handleMouseEnter).toHaveBeenCalledWith(film);
});
