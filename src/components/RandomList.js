import { useEffect, useRef } from 'react';
import React from 'react';


export const RandomList = ({ randomMeals }) => {

  return (
    <div id="random-list-container" className="justify-content-center col">
      <div id="random-header">Random Recipes</div>
      <div className="d-flex justify-content-center">{fillRandom(randomMeals)}</div>
    </div>
  );
};
const eventOnClick = (meal) => {
  alert('Awebooo prro !!' + JSON.stringify(meal));
};
const fillRandom = (randomMeal) => {
  const obj = []
  if (randomMeal.length >= 7) {
    for (let i = 0; i < 7; i += 1) {
      obj.push((
        <div key={i} className="random-item-container" onClick={(e) => eventOnClick(randomMeal[i])} >
          <div className="img-random-container hover01">
            <figure className="d-flex justify-content-center">
              <img className="img-thumbnail random-img" src={randomMeal[i].strMealThumb} />
            </figure>
          </div>
          <div className="title-random-container">{randomMeal[i].strMeal}</div>
        </div>
      ))
    }
  }

  return obj;
};