/* eslint-disable import/extensions */
import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { createStore } from 'redux';
import '@testing-library/jest-dom/extend-expect';
import reducer from '../../reducer/reducer';
import App from '../../containers/App';


function renderWithRedux(
  ui,
  { initialState, store = createStore(reducer, initialState) } = {},
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
}
afterEach(cleanup);

test('can render Home page with redux and default props', () => {
  const { getByTestId, getByText } = renderWithRedux(<App />);
  fireEvent.click(getByText('Home'));
  expect(getByTestId('div-home')).toBeTruthy();
});

test('Can not render home page ', () => {
  const { getByTestId, getByText } = renderWithRedux(<App />);
  fireEvent.click(getByText('Random Meals'));
  expect(getByTestId('random-header')).toBeTruthy();
});

test('can render menu from random meals', () => {
  const { getByTestId, getByText } = renderWithRedux(<App />);
  fireEvent.click(getByText('Random Meals'));
  expect(getByTestId('random-header')).toHaveTextContent('Random Recipes');
});

test('can not  render menu from random meals', () => {
  const { getByTestId, getByText } = renderWithRedux(<App />);
  fireEvent.click(getByText('Home'));
  expect(getByTestId('home-image')).toBeTruthy();
});

test('can render menu from categories', () => {
  const { getByTestId, getByText } = renderWithRedux(<App />);
  fireEvent.click(getByText('Categories'));
  expect(getByTestId('categories-header')).toHaveTextContent('Categories');
});

test('can not render menu from categories', () => {
  const { getByTestId, getByText } = renderWithRedux(<App />);
  fireEvent.click(getByText('Home'));
  expect(getByTestId('home-image').textContent).toBe('');
});
