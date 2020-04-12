import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

let pos = 0;

const RandomList = ({ randomMeals }) => {
  const [viewDetails, setViewDetails] = useState(false);

  const eventOnClick = (meal, setViewDetails, i) => {
    setViewDetails(true);
    pos = i;
  };

  const fillRandom = (randomMeal, viewDetails, setViewDetails) => {
    const obj = [];

    if (randomMeal.length >= 7) {
      for (let i = 0; i < 7; i += 1) {
        obj.push((
          <div role="button" tabIndex={0} key={i} className="random-item-container" onKeyPress={null} onClick={() => eventOnClick(randomMeal[i], setViewDetails, i)}>
            <div className="img-random-container hover01">
              <figure className="d-flex justify-content-center">
                <img className="img-thumbnail random-img" alt="delicious meal" src={randomMeal[i].strMealThumb} />
              </figure>
            </div>
            <div className="title-random-container">{randomMeal[i].strMeal}</div>
            {viewDetails ? <Redirect to={{ pathname: '/details', search: `${randomMeal[i].idMeal}`, state: { meal: randomMeal[pos] } }} /> : null}
          </div>
        ));
      }
    }

    return obj;
  };

  return (
    <div id="random-list-container" className="justify-content-center col">
      <div data-testid="random-header" id="random-header">Random Recipes</div>
      <div className="d-flex justify-content-center">{fillRandom(randomMeals, viewDetails, setViewDetails)}</div>
    </div>
  );
};


RandomList.propTypes = ({
  randomMeals: propTypes.instanceOf(Array).isRequired,
});
export default RandomList;
