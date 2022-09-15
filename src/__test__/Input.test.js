import React from 'react';
import renderer from 'react-test-renderer';
import Input from '../Components/Input';

it('Input component renders correctly', () => {
  const tree = renderer
    .create(<Input text="8" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
