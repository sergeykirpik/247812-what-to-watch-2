import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';

import films from '../../mocks/films2';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<App films={films} filmsByGenre={films} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
