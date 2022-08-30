import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CardsFood from '../components/CardsFood';
import { fetchApiAllFoods,
  fetchApiCategoriesFood,
  fetchApiFilterByCategory, fetchApiFood } from '../services/foodApi';
import { addFood } from '../redux/actions';

export default function Foods() {
  const foods = useSelector((state) => state.foodReducer.foods);
  const ingredientExplore = useSelector((state) => state.foodReducer.ingredientExplore);
  const dispatch = useDispatch();

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  // const [filtedFoods, setFiltedFoods] = useState([]);

  const callApiAndDispatch = async () => {
    const result = await fetchApiAllFoods();
    dispatch(addFood(result));
  };

  const filterByIngredientExplore = async () => {
    const result = await fetchApiFood('ingredient', ingredientExplore);
    dispatch(addFood(result));
  };

  const callApiFoodCategories = async () => {
    const numberMaxCategories = 4;
    const result = await fetchApiCategoriesFood();
    const categoriesList = result.filter((_, index) => index <= numberMaxCategories);
    setCategories(categoriesList);
  };

  useEffect(() => {
    if (ingredientExplore !== '') {
      console.log('alou');
      filterByIngredientExplore();
    } else {
      callApiAndDispatch();
    }
    callApiFoodCategories();
  }, []);

  const filterByCategory = async ({ target: { value } }) => {
    if (value !== selectedCategory) {
      setSelectedCategory(value);
      const result = await fetchApiFilterByCategory(value);
      console.log(result);
      dispatch(addFood(result));
    } else {
      setSelectedCategory('');
      const result = await fetchApiAllFoods();
      dispatch(addFood(result));
    }
  };

  return (
    <div>
      <Header
        profileIcon
        title="Foods"
        searchIcon
        typeFood="food"
      />
      <button
        type="button"
        data-testid="All-category-filter"
        value="All"
        onClick={ callApiAndDispatch }
      >
        All
      </button>
      {categories.length > 0 && categories
        .map(({ strCategory }) => (
          <button
            type="button"
            key={ strCategory }
            data-testid={ `${strCategory}-category-filter` }
            value={ strCategory }
            onClick={ filterByCategory }
          >
            { strCategory }
          </button>))}
      <CardsFood cards={ foods } />
      <Footer />
    </div>
  );
}
