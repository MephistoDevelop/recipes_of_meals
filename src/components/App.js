import React from 'react';
import { NavBar } from './NavBar';
import { RandomList } from './RandomList';
import { increaseCounter, decreaseCounter } from '../actions/actions';
import { useDispatch, useSelector, } from 'react-redux';

export const App = () => {
  const counter = useSelector(state => ({
    counter: state.counter,
  }));
  const dispatch = useDispatch();
  return (
    <div id="main-container">
      <NavBar />
      <RandomList />
    </div>
  );
};
