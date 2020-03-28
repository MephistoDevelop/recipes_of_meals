import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { browse } from 'react-router-dom';
import React from 'react';

let pos = 0;

export const RandomList = ({ randomMeals }) => {
  const [viewDetails, setViewDetails] = useState(false);
  const history = useHistory();
  if (history.location && history.location.state && history.location.state.from) {
    const state = { ...history.location.state };
    delete state.from;
    history.replace({ ...history.location, state });
  }
  return (
    <div id="random-list-container" className="justify-content-center col">
      <div id="random-header">Random Recipes</div>
      <div className="d-flex justify-content-center">{fillRandom(randomMeals, viewDetails, setViewDetails, history)}</div>
    </div>
  );
};
const eventOnClick = (meal, setViewDetails, i) => {
  // alert('Awebooo prro !!' + JSON.stringify(meal));
  setViewDetails(true);
  pos = i;
};

const fillRandom = (randomMeal, viewDetails, setViewDetails, history) => {
  const obj = []

  if (randomMeal.length >= 7) {
    for (let i = 0; i < 7; i += 1) {
      obj.push((
        <div key={i} className="random-item-container" onClick={(e) => eventOnClick(randomMeal[i], setViewDetails, i)} >
          <div className="img-random-container hover01">
            <figure className="d-flex justify-content-center">
              <img className="img-thumbnail random-img" src={randomMeal[i].strMealThumb} />
            </figure>
          </div>
          <div className="title-random-container">{randomMeal[i].strMeal}</div>
          {viewDetails === true ? history.replace({
            pathname: "/details",
            state: { meal: randomMeal[pos] }
          }) : null}
        </div>
      ))
    }
  }

  return obj;
};

