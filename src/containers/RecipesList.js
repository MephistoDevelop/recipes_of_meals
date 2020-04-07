import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useLocation, useHistory } from 'react-router-dom';

let mealsArr = [];
let mealSearched = [];

const RecipesList = () => {
  const [rendered, setRendered] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const location = useLocation();
  const categoryObj = location.state.category;
  const history = useHistory();

  const fetch = (category) => axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`).then((result) => {
    mealsArr = [];
    for (let i = 0; i < result.data.meals.length; i += 1) {
      mealsArr.push(result.data.meals[i]);
    }
    setRendered(true);
  });

  const fetchMeal = (meal) => axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`).then((result) => {
    mealSearched = [];
    mealSearched.push(result.data.meals[0]);
  });

  const onClick = async (mealObj) => {
    await fetchMeal(mealObj);
    setRedirect(true);
  };

  const setMeals = (meals) => {
    const divsArr = [];

    if (rendered) {
      for (let i = 0; i < meals.length; i += 1) {
        divsArr.push(
          <div role="button" tabIndex={0} onKeyPress={null} className="details-container d-flex m-4" name={meals[i].idMeal} onClick={() => onClick(meals[i])}>
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

  useEffect(() => {
    fetch(categoryObj.strCategory);
  }, []);

  return (
    <div data-testid="filter-meals">
      {setMeals(mealsArr)}
      {redirect ? history.replace({
        pathname: './details',
        state: { meal: mealSearched[0] },
      }) : null}
    </div>
  );
};

export default RecipesList;