import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from '../../components/App';
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

it('can show Home if not found some result', () => {
  const { getByPlaceholderText, getByText } = renderWithRedux(<FilterCategory />);
  const nameBox = getByPlaceholderText('Find Recipe');
  nameBox.value = 'beef';
  expect(fireEvent.click(getByText('Search'))).toBe(true);
});
