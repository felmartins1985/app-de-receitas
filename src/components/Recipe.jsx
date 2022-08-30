// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchApiById } from '../services/foodApi';

// export default function Recipe() {
//   const [data, setData] = useState([]);
//   const [ingredients, setIngredients] = useState([]);
//   const [measure, setMeasure] = useState([]);
//   const { id } = useParams();

//   console.log('Este é o Id:', id);
//   useEffect(() => {
//     const getRecipe = async () => {
//       const recipe = await fetchApiById(id);
//       const entriesRecipe = Object.entries(recipe[0]);
//       const filteredIngredients = entriesRecipe
//         .filter((item) => item[0].includes('strIngredient') && item[1] !== '');
//       const filteredQuantity = entriesRecipe
//         .filter((item) => item[0].includes('strMeasure') && item[1] !== ' ');
//       setIngredients(filteredIngredients);
//       setMeasure(filteredQuantity);
//       setData(recipe);
//     };
//     getRecipe();
//   }, []);

//   console.log('data:', data);
//   console.log('ingredients: ', ingredients);
//   console.log('Quantities: ', measure);
//   if (data.length === 0) {
//     return null;
//   }
//   return (
//     <div>
//       Recipe
//       <img src={ data[0].strMealThumb } alt="" data-testid="recipe-photo" />
//       <h2 data-testid="recipe-title">{data[0].strMeal}</h2>
//       <button
//         type="button"
//         data-testid="share-btn"
//       >
//         Share
//       </button>
//       <button
//         type="button"
//         data-testid="favorite-btn"
//       >
//         Favorite
//       </button>
//       <p data-testid="recipe-category">{data[0].strCategory}</p>
//       <h3>Ingredients:</h3>
//       <div className="div-ingredients">
//         {measure.length > 0 && ingredients.map((ingredient, index) => (
//           <p
//             key={ ingredient[0] }
//             data-testid={ `${index}-ingredient-name-and-measure` }
//           >
//             {`${ingredient[1]} - ${measure[index][1]}`}

//           </p>))}

//       </div>
//       <h3>Instructions:</h3>
//       <div>
//         <p data-testid="instructions">{data[0].strInstructions}</p>
//       </div>
//       <div>
//         AQUI É O VIDEO
//         <iframe
//           width="560"
//           height="315"
//           src={ data[0].strYoutube.replace('watch?v=', 'embed/') }
//           title="YouTube video player"
//           frameBorder="0"
//           allow="accelerometer;
//           autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         />
//       </div>
//       <div>
//         <h2>RECOMMENDED</h2>
//         <p data-testid="">
//           AQUI FICAM OS CARDS COM AS RECEITAS RECOMENDADAS
//         </p>
//       </div>
//       <button
//         type="button"
//         data-testid="start-recipe-btn"
//       >
//         Start Recipe
//       </button>
//     </div>
//   );
// }
