import React from 'react';
import { increaseCounter, decreaseCounter } from '../actions/actions';
import { useDispatch, useSelector, } from 'react-redux';

export const App = () => {
  const counter = useSelector(state => ({
    counter: state.counter,
  }));
  const dispatch = useDispatch();
  return (
    <div>
      MephistoDevelop Meal Recipes: Count { JSON.stringify(counter)} <br />
      <button onClick={() => dispatch(increaseCounter())}>Counter++</button>
      <button onClick={() => dispatch(decreaseCounter())}>Counter--</button>
      <p> Counter {counter.counter} </p>
    </div>
  );
};
