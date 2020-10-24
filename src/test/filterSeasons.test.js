import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';

import SeasonsFilter from '../components/SeasonsFilter';

afterEach(cleanup);

it('render the img in the dom', () => {
  const { getByTestId } = render(<SeasonsFilter />);
  expect(getByTestId('select')).toBeInTheDocument();
});
