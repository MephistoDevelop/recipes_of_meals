import React from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

export const RecipeDetails = () => {
  const location = useLocation();
  const { meal } = location.state;
  // console.log(`Imlocaion: ${JSON.stringify(location)}`);

  const getIngredients = (meal) => {
    const objArr = [];
    for (let i = 1; i < 19; i += 1) {
      if (meal[`strIngredient${i}`] !== '') {
        objArr.push(<div className="d-flex col">
          <div className="w-50">
            Ingredient:
            {meal[`strIngredient${i}`]}
          </div>
          <div>
            {' '}
            {meal[`strMeasure${i}`]}
          </div>
        </div>);
      }
      // console.log(`Hey: ${JSON.stringify(meal)}${meal[`strIngredient${i}`]} , ${meal[`strMeasure${i}`]}`);
    }
    return objArr;
  };

  return (
    <div>
      <img className="img-thumbnail random-img" src={meal.strMealThumb} />
      <div>
        Meal :
        <br />
        {meal.strMeal}
      </div>
      <div>
        Category:
        <br />
        {meal.strCategory}
      </div>
      <br />
      {getIngredients(meal)}
      <div>
        Intrucions:
        <br />
        {' '}
        {meal.strInstructions}
      </div>
      <div className="mt-5"><ReactPlayer url={meal.strYoutube} /></div>
      <br />
      <br />
      <br />
      {/* HelLo Datils {JSON.stringify(location.state.meal)} */}
    </div>
  );
};
