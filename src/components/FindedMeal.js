import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const FindedMeal = () => {
  let rendered = true;
  const location = useLocation();
  const MealsArr = location.state.meals;
  console.log(`MealsArr: ${JSON.stringify(MealsArr)}`)

  const onClickListener = () => {

  };



  const setMeals = (meals) => {
    const divsArr = [];

    if (rendered && meals) {
      for (let i = 0; i < meals.length; i += 1) {
        divsArr.push(
          <div role="button" className="details-container d-flex m-4" name={meals[i].idMeal} onClick={() => onClickListener(meals[i])}>
            <div>
              <img alt="meal" className="img-list" src={meals[i].strMealThumb} />
            </div>
            <div className="d-flex align-self-center ml-3">
              <p>{meals[i].strMeal}</p>
            </div>
          </div>,
        );
      }
      return (divsArr);
    }
    return true;
  };

  return (
    <div className="mt-5">
      {setMeals(MealsArr)}
    </div>
  );
};

export default FindedMeal;