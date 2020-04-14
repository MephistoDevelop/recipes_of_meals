import React from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import YouTube from 'react-youtube';

const RecipeDetails = () => {
  const location = useLocation();
  const { meal } = location.state || { meal: [] };

  const getIngredients = meal => {
    const objArr = [];
    for (let i = 1; i < 19; i += 1) {
      if (meal[`strIngredient${i}`] !== '') {
        objArr.push(
          <tr key={i}>
            <td>{meal[`strIngredient${i}`]}</td>
            <td>{meal[`strMeasure${i}`]}</td>
          </tr>,
        );
      }
    }
    return objArr;
  };
  // const url = `http://${meal.strYoutube.slice(8, meal.strYoutube.length) + '?showinfo=0&enablejsapi=1&origin=http://localhost:3000'}`
  const url = `${meal.strYoutube}`;

  const opts = {
    height: '390',
    width: '640',
  }

  return (
    <div>
      <div id="header-container" className="d-flex justify-content-center mt-5">
        <div id="image-details-container" className="mr-5">
          <img alt="delicious meal" id="img-details" src={meal.strMealThumb} />
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
              <tbody>
                <tr>
                  <th>Ingredient</th>
                  <th>Measure</th>
                </tr>
                {getIngredients(meal)}
              </tbody>
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
        {/* {console.log(`Link Youtube ${url} ==>${meal.strYoutube.slice(32, meal.strYoutube.length)} ==> ${'http://' + meal.strYoutube.slice(8, meal.strYoutube.length)}`)} */}
        {/* <ReactPlayer url={url} /> */}
        {/* <YouTube videoId={meal.strYoutube.slice(32, meal.strYoutube.length)} opts={opts} /> */}
        <iframe id="player" type="text/html" width="640" height="390"
          src={meal.strYoutube + "?enablejsapi=1&origin=https://example.com"}
          frameBorder="0"></iframe>
      </div>
    </div >
  );
};


export default RecipeDetails;
