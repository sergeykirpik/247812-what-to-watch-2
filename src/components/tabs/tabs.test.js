import React from 'react';
import renderer from 'react-test-renderer';
import Tabs from './tabs.jsx';

import films from '../../mocks/films2';

it(`renders correctly`, () => {
  const tree = renderer.create(
      <Tabs film={films[0]} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
