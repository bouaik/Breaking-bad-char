import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ShowCharacters from '../components/ShowCharacters';

afterEach(cleanup);

it('render the img in the dom', () => {
  const character = { name: 'lhoussaine', img: 'heloo.jpg', char_id: 5 };
  const { getByTestId } = render(
    <Router>
      <ShowCharacters character={character} />
    </Router>,
  );
  expect(getByTestId('img')).toBeInTheDocument();
});

it('render the name in the dom', () => {
  const character = { name: 'lhoussaine', img: 'heloo.jpg', char_id: 5 };
  const { getByTestId } = render(
    <Router>
      <ShowCharacters character={character} />
    </Router>,
  );
  expect(getByTestId('name')).toBeInTheDocument();
});

it('render the button in the dom', () => {
  const character = { name: 'lhoussaine', img: 'heloo.jpg', char_id: 5 };
  const { getByTestId } = render(
    <Router>
      <ShowCharacters character={character} />
    </Router>,
  );
  expect(getByTestId('btn')).toBeInTheDocument();
});
