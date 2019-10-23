import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list';

import films from '../../mocks/films';

it(`renders correctly`, () => {
  const tree = renderer.create(
      <MoviesList
        films={films} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
