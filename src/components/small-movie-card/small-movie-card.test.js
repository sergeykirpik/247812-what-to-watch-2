import React from 'react';
import renderer from 'react-test-renderer';
import SmallMovieCard from './small-movie-card.jsx';

it(`renders correctly`, () => {
  const tree = renderer.create(
      <SmallMovieCard
        title="Midnight Special"
        imgUrl="img/midnight-special.jpg" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
