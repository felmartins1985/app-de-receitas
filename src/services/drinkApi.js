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

const fetchApiDrink = async (radio, input) => {
  try {
    const response = await fetch(selectEndpointDrink(radio, input));
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    console.log(error);
  }
};

export default fetchApiDrink;
