import React, { useSate } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

export const RecipeDetails = () => {
  const location = useLocation();
  const { meal } = location.state;
  console.log(`Imlocaion: ${JSON.stringify(location)}`);

  const getIngredients = (meal) => {
    const objArr = [];
    for (let i = 1; i < 19; i += 1) {
      if (meal[`strIngredient${i}`] !== '') {
        objArr.push(
          <tr>
            <td>{meal[`strIngredient${i}`]}</td>
            <td>{meal[`strMeasure${i}`]}</td>
          </tr>,
        );
      }
      // console.log(`Hey: ${JSON.stringify(meal)}${meal[`strIngredient${i}`]} , ${meal[`strMeasure${i}`]}`);
    }
    return objArr;
  };

  return (
    <div>
      <div id="header-container" className="d-flex justify-content-center mt-5">
        <div id="image-details-container" className="mr-5">
          <img id="img-details" src={meal.strMealThumb} />
          <div id="meal-name">
            {meal.strMeal}
          </div>
          <div id="meal-category">
            Category:
            {meal.strCategory}
          </div>
        </div>
        <div id="ingredients-container">
          <div className="d-flex col">
            <table>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
              {getIngredients(meal)}
            </table>
          </div>
          <div />
        </div>
      </div>
      <div id="instructions-container">
        <p>Instrucions:</p>
        {' '}
        {meal.strInstructions}
      </div>
      <div id="video-container" className="mt-5">
        <ReactPlayer url={meal.strYoutube} />
      </div>
    </div>
  );
};
