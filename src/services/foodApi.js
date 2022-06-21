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

const fetchApiFood = async (radio, input) => {
  try {
    const response = await fetch(selectEndpointFood(radio, input));
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

export default fetchApiFood;
