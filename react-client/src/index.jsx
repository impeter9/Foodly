import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import List from './components/List.jsx';
import CustomNavbar from './components/CustomNavbar.jsx';
import MainImageCarousels from './components/MainImageCarousels.jsx';
import Favorites from './components/Favorites.jsx';
import { RECIPES_PATH, generateEdamamSearchURL } from './const.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      favorites: [],
      searchBool: false,
      favBool: false,
      searchedIngredients: [],
    }
  }

  getRecipes(searchBool, favBool) {
    axios.get(RECIPES_PATH)
      .then((res) => {
        const fav = res.data;
        fav.sort(function(a,b) {
          if (a['updated'] > b['updated']){
            return -1;
          } else {
            return 1;
          }
        });
        this.setState({
          favorites: fav,
          ...(searchBool !== null && {searchBool}),
          ...(favBool !== null && {favBool}),
        });
      });
  }

  componentDidMount() {
    this.getRecipes(null, null);
  }

  handleBackToHome() {
    this.getRecipes(false, false);
  }

  handleShowFavorites() {
    this.getRecipes(false, true);
  }

  handleAddToFavorite(e) {
    e.preventDefault();
    const recipe = this.state.data[e.target.getAttribute('value')]['recipe'];
    axios.post(RECIPES_PATH, {
      label: recipe.label,
      image: recipe.image,
      sourceUrl: recipe.url,
      edmUrl: recipe.shareAs,
      servings: recipe.yield,
      dietLabels: recipe.dietLabels,
      healthLabels: recipe.healthLabels,
      calories: Math.round(recipe.calories),
      ingredients: obj.ingredientLines,
    })
    alert('Recipe is added to your favorites!');
  }

  handleSearchChange(e) {
    e.preventDefault();
    const inValid = /^\s+$/;
    const k = inValid.test(e.target[0].value);
    if ((e.target[0].value.length > 0) && (!k)) {
      const ingredients = e.target[0].value.split(' ');
      e.target[0].value = '';
      const edamamSearchURL = generateEdamamSearchURL(ingredients);
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      axios.get(edamamSearchURL)
        .then(response => {
        this.setState({
          data: response.data.hits,
          searchBool: true,
          favBool: false,
          searchedIngredients: ingredients,
        });
      });
    }
  }

  render () {
    if((this.state.favBool === false)&&(this.state.searchBool === false)){
      return (<div>
        <CustomNavbar handleBackToHome={this.handleBackToHome.bind(this)} handleSearchChange={this.handleSearchChange.bind(this)} handleShowFavorites={this.handleShowFavorites.bind(this)} />
        <MainImageCarousels />
        <Favorites favorites={this.state.favorites} />
      </div>)
      } else if(this.state.favBool === true){
        return (<div>
          <CustomNavbar handleBackToHome={this.handleBackToHome.bind(this)} handleSearchChange={this.handleSearchChange.bind(this)} handleShowFavorites={this.handleShowFavorites.bind(this)} />
          <Favorites favorites={this.state.favorites} />
        </div>)
      } else if(this.state.searchBool === true){
        return (<div>
          <CustomNavbar handleBackToHome={this.handleBackToHome.bind(this)} handleSearchChange={this.handleSearchChange.bind(this)} handleShowFavorites={this.handleShowFavorites.bind(this)} />
          <List data={this.state.data} searchedIngredients={this.state.searchedIngredients} handleAddToFavorite={this.handleAddToFavorite.bind(this)} />
        </div>)
      }
    }
}

ReactDOM.render(<App />, document.getElementById('app'));