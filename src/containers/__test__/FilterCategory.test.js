/* eslint-disable import/extensions */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from '../App';
import FilterCategory from '../FilterCategory';
import reducer from '../../reducer/reducer';

function renderWithRedux(
  { initialState, store = createStore(reducer, initialState) } = {},
) {
  return {
    ...render(<Provider store={store}><App /></Provider>),
    store,
  };
}

it('can show Home if not found some result', () => {
  const { getByPlaceholderText, getByText } = renderWithRedux(<FilterCategory />);
  const nameBox = getByPlaceholderText('Find Recipe');
  nameBox.value = '';
  fireEvent.click(getByText('Search'));
});

it('can not show menu if not input some search', () => {
  const { getByText, getByTestId } = renderWithRedux(<FilterCategory />);
  fireEvent.click(getByText('Search'));
  expect(getByTestId('home-image')).toBeTruthy();
});

it('Can render  and search using filterBox', () => {
  const { getByPlaceholderText, getByText } = renderWithRedux(<FilterCategory />);
  const nameBox = getByPlaceholderText('Find Recipe');
  nameBox.value = 'beef';
  expect(fireEvent.click(getByText('Search'))).toBe(true);
});

it('Can not render using filterBox', () => {
  const { getByTestId, getByPlaceholderText } = renderWithRedux(<FilterCategory />);
  const nameBox = getByPlaceholderText('Find Recipe');
  nameBox.value = 'beef';
  expect(getByTestId('home-image')).toBeTruthy();
});
