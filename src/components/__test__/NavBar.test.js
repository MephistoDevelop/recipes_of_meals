import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import NavBar from '../NavBar';
import App from '../App';
import { MemoryRouter } from 'react-router-dom'
import reducer, { initialState } from '../../reducer/reducer';
import { render, fireEvent, getByTestId, getByText } from '@testing-library/react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { createMemoryHistory } from 'history'


function renderWithRedux(
  { initialState, store = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{<App />}</Provider>),
    store,
  }
}

const customRender = (
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
    initialState,
    store = createStore(reducer, initialState),
    ...options
  } = {}
) => ({
  ...render(
    <Provider store={store}>
      {ui}
    </Provider>,
    options
  ),
  history,
});

test('can render with redux and router', () => {
  const { getByTestId, getByText } = customRender(
    <App />
  );
  fireEvent.click(getByText('Random Meals'));
  expect(getByTestId('random-header')).toBeVisible()
})