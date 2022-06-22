import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardsDrink from '../components/CardsDrink';
import { fetchApiAllDrinks, fetchApiCategoriesDrinks,
  fetchApiFilterByCategory } from '../services/drinkApi';
import { addDrink } from '../redux/actions';

export default function Drinks() {
  const drinks = useSelector((state) => state.drinkReducer.drinks);
  const dispatch = useDispatch();

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const callApiAndDispatch = async () => {
    const result = await fetchApiAllDrinks();
    dispatch(addDrink(result));
  };

  const callApiDrinkCategories = async () => {
    const numberMaxCategories = 4;
    const result = await fetchApiCategoriesDrinks();
    const categoriesList = result.filter((_, index) => index <= numberMaxCategories);
    setCategories(categoriesList);
  };

  useEffect(() => {
    callApiAndDispatch();
    callApiDrinkCategories();
  }, []);

  const filterByCategory = async ({ target: { value } }) => {
    console.log(value);
    if (value !== selectedCategory) {
      setSelectedCategory(value);
      const result = await fetchApiFilterByCategory(value);
      console.log(result);
      dispatch(addDrink(result));
    } else {
      setSelectedCategory('');
      const result = await fetchApiAllDrinks();
      dispatch(addDrink(result));
    }
  };

  return (
    <div>
      <Header
        profileIcon
        title="Drinks"
        searchIcon
        typeFood="drink"
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
      <CardsDrink cards={ drinks } />
      <Footer />
    </div>
  );
}
