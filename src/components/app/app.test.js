import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

import mockData from '../../data';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<App films={mockData} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
