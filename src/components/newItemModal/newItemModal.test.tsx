import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewItemModal from './index';

const onClick = () => {
 return null;
};

describe('<NewItemModal />', () => {
 test('should render the component', async () => {
  render(<NewItemModal onClick={onClick} />);
 });

 test('should fire handleSubmit after submit event', async () => {
  const { getByText } = render(<NewItemModal onClick={onClick} />);

  fireEvent.click(getByText('dodaj'));
  expect(handleSubmit).toHaveBeenCalled(1);
 });
});
