import React from 'react';
import renderer from 'react-test-renderer';
import SmallMovieCard from './small-movie-card.jsx';

import films from '../../mocks/films';

it(`renders correctly`, () => {
  const tree = renderer.create(
      <SmallMovieCard
        film={films[0]} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
