import { key } from '../../config.js';

const BASE_URL = 'http://localhost:3000';

const API_PATH_NAME = 'api';
const RECIPES_PATH_NAME = 'recipes';
const LOGIN_PATH_NAME = 'login';
const REGISTER_PATH_NAME = 'register';

export const RECIPES_PATH = `${BASE_URL}/${API_PATH_NAME}/${RECIPES_PATH_NAME}`;
export const LOGIN_PATH = `${BASE_URL}/${API_PATH_NAME}/${LOGIN_PATH_NAME}`;
export const REGISTER_PATH = `${BASE_URL}/${API_PATH_NAME}/${REGISTER_PATH_NAME}`;

const EDAMAM_SEARCH_URL = 'https://api.edamam.com/search?q=';

export function generateEdamamSearchURL(ingredients) {
  const apiURL = 'https://api.edamam.com/search?q=';
  const apiKey = '&app_key=' + key.RECIPE_API_KEY;
  const apiId = '&app_id=d124943d';
  const maxTime = '&time=30';
  const maxIngredients = '&ingr=10';
  const mappedIngredients = ingredients
  .map((ingredient, idx) => {
    if (idx < ingredients.length - 1) {
      return ingredient + '+';
    } else {
      return ingredient;
    }
  }).join('');
  return `${apiURL}${mappedIngredients}${maxIngredients}${maxTime}${apiId}${apiKey}`;
};