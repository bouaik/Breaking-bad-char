import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import SeasonsFilter from '../components/SeasonsFilter';

afterEach(cleanup);

it('render categorys', () => {
  const handleFilterChange = () => 1 + 2;
  const { getByTestId } = render(
    <SeasonsFilter handleFilterChange={handleFilterChange} />,
  );
  expect(getByTestId('select')).toBeInTheDocument();
});
