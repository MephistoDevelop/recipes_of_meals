import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';


const FindedMeal = () => {
  let rendered = true;
  const [redirect, setRedirect] = useState(false);
  const [meal, setMeal] = useState({});
  const location = useLocation();
  const MealsArr = location.state.meals;
  let mealSearched = [];
  const history = useHistory();

  // console.log(`MealsArr: ${JSON.stringify(MealsArr)}`)

  const onClickListener = async (mealObj, event) => {
    await fetchMeal(mealObj);
    mealObj = mealSearched[0];
    setMeal(mealSearched[0]);
    setRedirect(true);
    event.val = '';
    console.log(JSON.stringify(mealObj));
  };

  const fetchMeal = async (meal) => await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`).then((result) => {
    mealSearched = [];
    mealSearched.push(result.data.meals[0]);
  });

  const setMeals = (meals) => {
    const divsArr = [];

    if (rendered && meals) {
      for (let i = 0; i < meals.length; i += 1) {
        divsArr.push(
          <div role="button" className="details-container d-flex m-4" name={meals[i].idMeal} onClick={(e) => onClickListener(meals[i], e)}>
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
      {redirect ? history.replace({
        pathname: './details',
        state: { meal: meal, hey: "Hello" },
      }) : null}
    </div>
  );
};

export default FindedMeal;