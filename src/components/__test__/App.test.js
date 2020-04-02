import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { initialState } from '../../reducer/reducer';
import reducer from '../../reducer/reducer';
import App from '../App';

function renderWithRedux(
  ui,
  { initialState, store = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  }
}

test('can render with redux with defaults', () => {
  const { getByTestId, getByText } = renderWithRedux(<App />)
  fireEvent.click(getByText('Home'))

  expect(getByTestId('div-home')).toBeTruthy();
})