import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchApiById } from '../services/foodApi';

export default function Recipe() {
  const [data, setData] = useState([]);

  const { id } = useParams();

  console.log('Este é o Id:', id);
  useEffect(() => {
    const getRecipe = async () => {
      const recipe = await fetchApiById(id);
      console.log('Recipe', recipe[0]);
      setData(recipe);
    };
    getRecipe();
  }, []);

  console.log('data:', data);

  return (
    <div>
      Recipe
      <img src="data[0].strMealThumb" alt="" data-testid="recipe-photo" />
      <h2 data-testid="recipe-title">TITLE</h2>
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
      <p data-testid="recipe-category">Category</p>
      <h3>Ingredients:</h3>
      <div className="div-ingredients">
        <p data-testid="">Ingredient1</p>
        <p data-testid="">Ingredient2</p>
        <p data-testid="">Ingredient3</p>
        <p data-testid="">Ingredient4</p>
      </div>
      <h3>Instructions:</h3>
      <div>
        <p data-testid="instructions">hhnkhklhblkhkbjgjkgjhghlkjnhlkhnnlkhnlkjhnlkhklh</p>
      </div>
      <div>
        AQUI É O VIDEO
      </div>
      <div>
        <h2>RECOMMENDED</h2>
        <p data-testid="">
          AQUI FICAM OS CARDS COM AS RECEITAS RECOMENDADAS
        </p>
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
