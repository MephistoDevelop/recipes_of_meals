import axios from 'axios'

let initialState = {
  mealCategories: [],
  mealRandom: [],
};

const reducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case 'SET_CATEGORIES':

      const response = async () => {
        const categoriesArr = [];
        const result = async () => await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        result().then(Response => {
          const objArr = Response.data.categories;
          objArr.forEach((category) => {
            categoriesArr.push(category);
          });
        });
        newState.mealCategories = categoriesArr;
      };
      response();
      return newState

    case 'SET_RANDOM':

      const responseRandom = async () => {
        const randomArr = [];
        for (let i = 0; i < 8; i += 1) {
          const result = () => axios.get('https://www.themealdb.com/api/json/v1/1/random.php');

          result().then(Response => {
            const Obj = Response.data.meals[0];
            randomArr.push(Obj);
          });
        }
        console.log(`Imreducer random: ${newState.mealRandom}`);
        newState.mealRandom = randomArr;
      };
      responseRandom();

      return newState;
    default:
      return newState;
  }
};

export default reducer;
