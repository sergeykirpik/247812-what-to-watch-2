import React from 'react';
import renderer from 'react-test-renderer';
import MoviePageDetails from './movie-page-details';

import films from '../../mocks/films2';

it(`renders correctly`, () => {
  const tree = renderer.create(
      <MoviePageDetails
        film={films[0]} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
