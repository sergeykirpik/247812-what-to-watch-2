import React from 'react';
import renderer from 'react-test-renderer';
import {ShowMore} from './show-more.jsx';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<ShowMore />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
