import React from 'react';
import renderer from 'react-test-renderer';
import MainScreen from './main-screen.jsx';

import mockData from '../../data';

it(`renders correctly`, () => {
  const tree = renderer.create(
      <MainScreen
        films={mockData} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
