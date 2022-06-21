import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { thunkFood } from '../redux/actions/index';

export default function SearchBar() {
  const dispatch = useDispatch();

  const [radio, setRadio] = useState('');
  const [input, setInput] = useState('');

  const sendRequestFoodApi = () => {
    if (radio === 'first-letter' && radio.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    }
    dispatch(thunkFood(radio, input));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search Recipe"
        data-testid="search-input"
        onChange={ ({ target }) => setInput(target.value) }
      />
      <label htmlFor="ingredient-search-radio">
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          id="ingredient-search-radio"
          name="search-radio"
          onChange={ ({ target }) => setRadio(target.value) }
          value="ingredient"
        />
        Ingrediente
      </label>
      <label htmlFor="name-search-radio">
        <input
          type="radio"
          data-testid="name-search-radio"
          id="name-search-radio"
          name="search-radio"
          value="name"
          onChange={ ({ target }) => setRadio(target.value) }
        />
        Name
      </label>
      <label htmlFor="first-letter-search-radio">
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          id="first-letter-search-radio"
          name="search-radio"
          value="first-letter"
          onChange={ ({ target }) => setRadio(target.value) }
        />
        First Letter
      </label>
      <button
        data-testid="exec-search-btn"
        type="button"
        onClick={ sendRequestFoodApi }
      >
        Search
      </button>
    </div>
  );
}
