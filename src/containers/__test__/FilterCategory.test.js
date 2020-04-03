
import React from 'react';
import FilterCategory, { rendered } from '../FilterCategory';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import App from '../../components/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../../reducer/reducer';

function renderWithRedux(
  { initialState, store = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{<App />}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  }
}

it('can show Home if not found some result', () => {
  const { getByPlaceholderText, getByText, getByTestId } = renderWithRedux(<FilterCategory />);
  const nameBox = getByPlaceholderText('Find Recipe');
  nameBox.value = "";
  fireEvent.click(getByText('Search'));
});


it('can show Home if not found some result', () => {
  const { getByPlaceholderText, getByText, getByTestId } = renderWithRedux(<FilterCategory />);
  const nameBox = getByPlaceholderText('Find Recipe');
  nameBox.value = "beef";
  expect(fireEvent.click(getByText('Search'))).toBe(true);
});