import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FoodsCarousel from '../components/FoodsCarousel';
import { fetchApiById } from '../services/drinkApi';

export default function DrinkDetails() {
  const [data, setData] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [measure, setMeasure] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getRecipe = async () => {
      const recipe = await fetchApiById(id);
      const entriesRecipe = Object.entries(recipe[0]);
      const filteredIngredients = entriesRecipe
        .filter((item) => item[0].includes('strIngredient') && item[1] !== null);
      const filteredQuantity = entriesRecipe
        .filter((item) => item[0].includes('strMeasure') && item[1] !== null);
      setMeasure(filteredQuantity);
      setIngredients(filteredIngredients);
      setData(recipe);
    };
    getRecipe();
  }, []);

  console.log('data:', data);
  console.log('ingredients: ', ingredients);
  console.log('Quantities: ', measure);
  if (data.length === 0 || ingredients.length === 0 || measure.length === 0) {
    return null;
  }

  return (
    <div>
      Recipe
      <img src={ data[0].strMealThumb } alt="" data-testid="recipe-photo" />
      <h2 data-testid="recipe-title">{data[0].strDrink}</h2>
      <button
        type="button"
        data-testid="share-btn"
      >
        Share
      </button>
      <button
        type="button"
        data-testid="favorite-btn"
      >
        Favorite
      </button>
      {data[0].strAlcoholic === 'Alcoholic'
        ? <p data-testid="recipe-category">{data[0].strAlcoholic}</p>
        : <p data-testid="recipe-category">{data[0].strCategory}</p>}
      {/* <p data-testid="recipe-category">{data[0].strCategory}</p> */}
      <h3>Ingredients:</h3>
      <div className="div-ingredients">
        {measure.length > 0 && ingredients.map((ingredient, index) => (
          <p
            key={ ingredient[0] }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {`${ingredient[1]} - ${measure[index][1]}`}

          </p>))}

      </div>
      <h3>Instructions:</h3>
      <div>
        <p data-testid="instructions">{data[0].strInstructions}</p>
      </div>
      <div>
        <h2>RECOMMENDED</h2>
        <FoodsCarousel />
      </div>
      <button
        type="button"
        data-testid="start-recipe-btn"
      >
        Start Recipe
      </button>
    </div>
  );
}
