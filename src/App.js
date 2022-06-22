import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import FoodDetails from './pages/FoodDetails';
import DrinkDetails from './pages/DrinkDetails';
import FoodProgress from './pages/FoodProgress';
import DrinkProgress from './pages/DrinkProgress';
import Explore from './pages/Explore';
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
        <Route exact path="/foods/:id/in-progress" component={ FoodProgress } />
        <Route exact path="/drinks/:id/in-progress" component={ DrinkProgress } />
        <Route exact path="/foods/:id" component={ FoodDetails } />
        <Route exact path="drinks/:id" component={ DrinkDetails } />
        <Route exact path="/foods" component={ Foods } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/explore/foods/ingredients" component={ FoodsIngredients } />
        <Route exact path="/explore/drinks/ingredients" component={ DrinksIngredients } />
        <Route
          exact
          path="/explore/foods/nationalities"
          component={ FoodsNationalities }
        />
        <Route exact path="/explore/foods" component={ FoodExplore } />
        <Route exact path="/explore/drinks" component={ DrinkExplore } />
        <Route exact path="/explore" component={ Explore } />
        <Route exact path="/profile" component={ Profile } />
        <Route path="/done-recipes" component={ DoneRecipes } />
        <Route path="/favorite-recipes" component={ FavoriteRecipes } />
      </Switch>
    </div>
  );
}

export default App;
