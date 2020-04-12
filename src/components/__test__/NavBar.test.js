/* eslint-disable import/no-duplicates */
/* eslint-disable import/extensions */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  render, fireEvent,
} from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import axios from 'axios';
import axiosMock from 'axios';
import { Router } from 'react-router-dom';
import reducer from '../../reducer/reducer';
import App from '../App';

afterEach(() => {
  axios.get.mockClear();
});

const customRender = (
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
    initialState,
    store = createStore(reducer, initialState),
    ...options
  } = {},
) => ({
  ...render(
    <Provider store={store}>
      <Router history={history}>
        {ui}
      </Router>
    </Provider>,
    options,
  ),
  history,
});


test('can render random meals with redux and router using axios request on load', () => {
  axiosMock.get.mockResolvedValueOnce({ data: { categories: [] } });
  const { getByTestId, getByText } = customRender(
    <App />,
  );
  expect(axiosMock.get).toHaveBeenCalledTimes(10);
  fireEvent.click(getByText('Random Meals'));
  expect(getByTestId('random-header')).toBeVisible();
});
