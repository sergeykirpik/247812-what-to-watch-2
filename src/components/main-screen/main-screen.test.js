import React from 'react';
import renderer from 'react-test-renderer';
import {MainScreen} from './main-screen.jsx';

import films from '../../mocks/films2';

it(`renders correctly`, () => {
  const tree = renderer.create(
      <MainScreen
        films={films} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
