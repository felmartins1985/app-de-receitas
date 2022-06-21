import React from 'react';

export default function SearchBar() {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Recipe"
        data-testid="search-input"
      />
      <label htmlFor="ingredient-search-radio">
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          id="ingredient-search-radio"
          name="search-radio"
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
        />
        First Letter
      </label>
      <button
        data-testid="exec-search-btn"
        type="button"
      >
        Search
      </button>
    </div>
  );
}
