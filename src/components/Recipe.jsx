import React from 'react';

export default function Recipe() {
  return (
    <div>
      Recipe
      <img src="" alt="" data-testid="recipe-photo" />
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
        <p data-testid={ `${index}-ingredient-name-and-measure` }>Ingredient1</p>
        <p data-testid={ `${index}-ingredient-name-and-measure` }>Ingredient2</p>
        <p data-testid={ `${index}-ingredient-name-and-measure` }>Ingredient3</p>
        <p data-testid={ `${index}-ingredient-name-and-measure` }>Ingredient4</p>
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
        <p data-testid={ `${index}-recomendation-card` }>
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
