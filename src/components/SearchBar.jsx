import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchApiFood } from '../services/foodApi';
import { fetchApiDrink } from '../services/drinkApi';
import { addFood, addDrink } from '../redux/actions';
import '../styles/header.css';

export default function SearchBar({ typeFood }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [radio, setRadio] = useState('');
  const [input, setInput] = useState('');

  const sendRequestFoodApi = async () => {
    if (radio === 'first-letter' && radio.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    }
    if (typeFood === 'food') {
      const result = await fetchApiFood(radio, input);
      console.log(result);
      if (result === null) {
        global.alert('Sorry, we haven\'t found any recipes for these filters.');
      } else if (result.length === 1) {
        history.push(`/foods/${result[0].idMeal}`);
        dispatch(addFood(result));
      } else {
        dispatch(addFood(result));
      }
    } else {
      const result = await fetchApiDrink(radio, input);
      if (result === null) {
        global.alert('Sorry, we haven\'t found any recipes for these filters.');
      } else if (result.length === 1) {
        history.push(`/drinks/${result[0].idDrink}`);
        dispatch(addDrink(result));
      } else {
        dispatch(addDrink(result));
      }
    }
  };
  return (
    <div className="searchContainer">
      <div>
        <input
          className="inputSearch"
          type="text"
          placeholder="Search Recipe"
          data-testid="search-input"
          onChange={ ({ target }) => setInput(target.value) }
        />
        <button
          className="searchBtn"
          data-testid="exec-search-btn"
          type="button"
          onClick={ sendRequestFoodApi }
        >
          Search
        </button>
      </div>

      <div className="control-group">
        <label
          htmlFor="ingredient-search-radio"
          data-testid="ingredient-search-radio"
          className="control control-radio"
        >
          <input
            type="radio"
            id="ingredient-search-radio"
            name="search-radio"
            onChange={ ({ target }) => setRadio(target.value) }
            value="ingredient"
          />
          Ingrediente
          <div className="control_indicator" />
        </label>
        <label
          htmlFor="name-search-radio"
          data-testid="name-search-radio"
          className="control control-radio"
        >
          <input
            type="radio"
            id="name-search-radio"
            name="search-radio"
            value="name"
            onChange={ ({ target }) => setRadio(target.value) }
          />
          Name
          <div className="control_indicator" />
        </label>
        <label
          htmlFor="first-letter-search-radio"
          data-testid="first-letter-search-radio"
          className="control control-radio"
        >
          <input
            type="radio"
            id="first-letter-search-radio"
            name="search-radio"
            value="first-letter"
            onChange={ ({ target }) => setRadio(target.value) }
          />
          First Letter
          <div className="control_indicator" />
        </label>
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  typeFood: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
