const selectEndpointDrink = (radio, input) => {
  switch (radio) {
  case 'ingredient':
    return `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${input}`;
  case 'name':
    return `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`;
  case 'first-letter':
    return `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${input}`;
  default:
  }
};

export const fetchApiDrink = async (radio, input) => {
  try {
    const response = await fetch(selectEndpointDrink(radio, input));
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    console.log(error);
  }
};

export const fetchApiAllDrinks = async () => {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    console.log(error);
  }
};

export const fetchApiCategoriesDrinks = async () => {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    console.log(error);
  }
};

export const fetchApiFilterByCategory = async (category) => {
  try {
    const response = await
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    console.log(error);
  }
};
