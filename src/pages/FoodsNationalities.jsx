import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchNationalities, fetchFoodsByNationalities,
  fetchApiAllFoods } from '../services/foodApi';
import { addFood } from '../redux/actions';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CardsFood from '../components/CardsFood';

export default function FoodsNationalities() {
  const dispatch = useDispatch();

  const foods = useSelector((state) => state.foodReducer.foods);

  const [nationalities, setNationalities] = useState([]);
  // const [nationalitySelected, setNationalitySelected] = useState('All');
  // const [foods, setFoods] = useState([]);

  const callApiNationalities = async () => {
    const result = await fetchNationalities();
    setNationalities(result);
  };

  const callAllFoods = async () => {
    const result = await fetchApiAllFoods();
    dispatch(addFood(result || []));
  };

  useEffect(() => {
    callAllFoods();
    callApiNationalities();
  }, []);

  const filterByNationality = async (value) => {
    if (value !== 'All') {
      const result = await fetchFoodsByNationalities(value);
      // console.log(result);
      dispatch(addFood(result));
    } else {
      callAllFoods();
    }
  };

  return (
    <div>
      <Header
        profileIcon
        title="Explore Nationalities"
        searchIcon
        typeFood="food"
      />
      <select
        data-testid="explore-by-nationality-dropdown"
        // onChange={ ({ target: { value } }) => setNationalitySelected(value) }
        onChange={ ({ target: { value } }) => filterByNationality(value) }
        // value={ nationalitySelected }
        // name={ nationalitySelected }
      >
        <option
          value="All"
          data-testid="All-option"
        >
          All
        </option>
        {nationalities.length > 0 && nationalities
          .map(({ strArea }) => (
            <option
              value={ strArea }
              key={ strArea }
              data-testid={ `${strArea}-option` }
            >
              { strArea }
            </option>))}
      </select>
      <CardsFood cards={ foods } />
      <Footer />
    </div>
  );
}
