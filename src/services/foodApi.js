// const allFoods =

const selectEndpointFood = (radio, input) => {
  switch (radio) {
  case 'ingredient':
    return `https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`;
  case 'name':
    return `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;
  case 'first-letter':
    return `https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`;
  default:
  }
};

export const fetchApiFood = async (radio, input) => {
  try {
    const response = await fetch(selectEndpointFood(radio, input));
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

export const fetchApiAllFoods = async () => {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

export const fetchApiCategoriesFood = async () => {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

export const fetchApiFilterByCategory = async (category) => {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

export const fetchApiById = async (id) => {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

export const fetchApiRandom = async () => {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const data = await response.json();
    return data.meals[0].idMeal;
  } catch (error) {
    console.log(error);
  }
};

export const fetchFoodIngredients = async () => {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

export const fetchFoodIngredientsImages = async (name) => {
  try {
    const response = await fetch(`https://www.themealdb.com/images/ingredients/${name}-Small.png`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchNationalities = async () => {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    const data = await response.json();
    // console.log(data);
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

export const fetchFoodsByNationalities = async (name) => {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`);
    const data = await response.json();
    // console.log(data);
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};
