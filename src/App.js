import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import FoodDetails from './pages/FoodDetails';
import DrinkDetails from './pages/DrinkDetails';
import FoodProgress from './pages/FoodProgress';
import DrinkProgress from './pages/DrinkProgress';
import Explorer from './pages/Explorer';
import FoodExplore from './pages/FoodExplore';
import DrinkExplore from './pages/DrinkExplore';
import FoodsIngredients from './pages/FoodsIngredients';
import DrinksIngredients from './pages/DrinksIngredients';
import FoodsNationalities from './pages/FoodsNationalities';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/foods" component={ Foods } />
        <Route path="/drinks" component={ Drinks } />
        <Route path="/foods/{id-da-receita}" component={ FoodDetails } />
        <Route path="/drinks/{id-da-receita}" component={ DrinkDetails } />
        <Route path="/foods/{id-da-receita}/in-progress" component={ FoodProgress } />
        <Route path="/drinks/{id-da-receita}/in-progress" component={ DrinkProgress } />
        <Route path="/explore" component={ Explorer } />
        <Route path="/explore/foods" component={ FoodExplore } />
        <Route path="/explore/drinks" component={ DrinkExplore } />
        <Route path="/explore/foods/ingredients" component={ FoodsIngredients } />
        <Route path="/explore/drinks/ingredients" component={ DrinksIngredients } />
        <Route path="/explore/foods/nationalities" component={ FoodsNationalities } />
        <Route path="/profile" component={ Profile } />
        <Route path="/done-recipes" component={ DoneRecipes } />
        <Route path="/favorite-recipes" component={ FavoriteRecipes } />
      </Switch>
    </div>
  );
}

export default App;
