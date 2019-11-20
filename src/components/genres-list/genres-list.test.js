import React from 'react';
import renderer from 'react-test-renderer';
import {GenresList} from './genres-list.jsx';

const genres = [`All genres`, `Comedy`, `Drama`];

it(`renders correctly`, () => {
  const tree = renderer
    .create(<GenresList genres={genres} onSelectItem={jest.fn()} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
