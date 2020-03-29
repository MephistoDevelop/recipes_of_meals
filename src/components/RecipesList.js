import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import { useLocation, useHistory } from 'react-router-dom';

let mealsArr = [];
let meal = null;
let mealSearched = [];

export const RecipesList = (props) => {
  const [rendered, setRendered] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const location = useLocation();
  const categoryObj = location.state.category;
  const history = useHistory();

  const fetch = async (category) => await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`).then((result) => {
    //  alert(JSON.stringify(result.data.meals)+'\n Category: '+category);
    mealsArr = [];
    for (let i = 0; i < result.data.meals.length; i += 1) {
      mealsArr.push(result.data.meals[i]);
    }
    setRendered(true);
  });

  const fetchMeal = async (meal) => await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`).then((result) => {
    mealSearched = [];
    mealSearched.push(result.data.meals[0]);
  });

  const onClick = async (mealObj) => {
    await fetchMeal(mealObj);
    // alert(JSON.stringify(mealSearched));
    console.log(`mealSearched: ${JSON.stringify(mealSearched[0])}`);
    setRedirect(true);
  };
  const setMeals = (meals) => {
    const divsArr = [];
    if (rendered) {
      for (let i = 0; i < meals.length; i += 1) {
        divsArr.push(
          <div className="details-container d-flex m-4" name={meals[i].idMeal} onClick={() => onClick(meals[i])}>
            <div>
              {' '}
              <img className="img-list" src={meals[i].strMealThumb} />
            </div>
            <div className="d-flex align-self-center ml-3">
              <p>{meals[i].strMeal}</p>
            </div>
          </div>);
      }
      return (divsArr);
    }

  };

  useEffect(() => {
    const result = fetch(categoryObj.strCategory);
    // console.log(`IM result from Fetch:: ${JSON.stringify(mealsArr)} `);
  }, []);

  return (
    <div>
      {setMeals(mealsArr)}
      {redirect ? history.replace({
        pathname: './details',
        state: { meal: mealSearched[0] }
      }) : null}
    </div>
  );
};
