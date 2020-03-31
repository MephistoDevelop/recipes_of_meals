import axios from 'axios'

let initialState = {
  mealCategories: [],
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

    default:
      return newState;
  }
};

export default reducer;
