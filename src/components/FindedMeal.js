import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, Redirect } from 'react-router-dom';

const FindedMeal = () => {
  const rendered = true;
  const [redirect, setRedirect] = useState(false);
  const [meal, setMeal] = useState({});
  const location = useLocation();
  const MealsArr = location.state.mealSearch;
  let mealSearched = [];

  const fetchMeal = meal => axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`).then(result => {
    mealSearched = [];
    mealSearched.push(result.data.meals[0]);
  });

  const onClickListener = async mealObj => {
    await fetchMeal(mealObj);
    setMeal(mealSearched[0]);
    setRedirect(true);
  };

  const setMeals = meals => {
    const divsArr = [];

    if (rendered && meals) {
      for (let i = 0; i < meals.length; i += 1) {
        divsArr.push(
          <div key={i} role="button" tabIndex={0} className="details-container d-flex m-4" name={meals[i].idMeal} onKeyPress={null} onClick={() => onClickListener(meals[i])}>
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
    <div id="finded-container" className="mt-5">
      {setMeals(MealsArr)}
      {redirect ? <Redirect to={{ pathname: '/details', search: `${meal.idMeal}`, state: { meal } }} /> : null}
    </div>
  );
};
export default FindedMeal;
