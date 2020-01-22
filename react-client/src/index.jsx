import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from "axios";
import List from './components/List.jsx';
import CustomNavbar from './components/CustomNavbar.jsx';
import MainImageCarousels from './components/MainImageCarousels.jsx';
import Favorites from './components/Favorites.jsx';
import Welcome from './components/Welcome.jsx';

import key from '../../config.js';

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

  componentDidMount() {
    axios.get('http://localhost:3000/api/recipes')
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
      });
    });
  }

  handleBackToHome() {
    axios.get('http://localhost:3000/api/recipes')
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
        searchBool: false,
        favBool: false,
      });
    });
  }

  handleShowFavorites() {
    axios.get('http://localhost:3000/api/recipes')
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
          favBool: true,
          searchBool: false,
        });
      });
  }

  handleAddToFavorite(e) {
    e.preventDefault();
    console.log(e.target.getAttribute("value"));
    console.log(this.state.data[e.target.getAttribute("value")]);
    const obj = this.state.data[e.target.getAttribute("value")]['recipe'];
    axios.post('http://localhost:3000/api/recipes', {
      label: obj.label,
      image: obj.image,
      sourceUrl: obj.url,
      edmUrl: obj.shareAs,
      servings: obj.yield,
      dietLabels: obj.dietLabels,
      healthLabels: obj.healthLabels,
      calories: Math.round(obj.calories),
      ingredients: obj.ingredientLines,
    })
    alert("Recipe is added to your favorites!");
  }

  handleSearchChange(e) {
    e.preventDefault();
    console.log(e.target[0].value);
    const inValid = /^\s+$/;
    const k = inValid.test(e.target[0].value);
    if ((e.target[0].value.length > 0) && (!k)) {
      const ingredients = e.target[0].value.split(' ');
      e.target[0].value = '';
      const apiURL = "https://api.edamam.com/search?q=";
      const apiKey = "&app_key=" + key.RECIPE_API_KEY;
      const apiId = "&app_id=d124943d";
      const maxTime = "&time=30";
      const maxIngreds = `&ingr=10`;
      const mappedIngreds = ingredients
      .map((ingredient, idx) => {
        if (idx < ingredients.length - 1) {
          return ingredient + "+";
        } else {
          return ingredient;
        }
      }).join("");
      const url = `${apiURL}${mappedIngreds}${maxIngreds}${maxTime}${apiId}${apiKey}`;
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      axios.get(url)
        .then(response => {
        console.log(response.data.hits);
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
        <Welcome />
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
    // return (<div>
    //   <CustomNavbar handleBackToHome={this.handleBackToHome.bind(this)} handleSearchChange={this.handleSearchChange.bind(this)} handleShowFavorites={this.handleShowFavorites.bind(this)} />
    //   {this.state.searchBool ? (
    //     <List data={this.state.data} searchedIngredients={this.state.searchedIngredients} handleAddToFavorite={this.handleAddToFavorite.bind(this)} />
    //   ) : (
    //     <MainImageCarousels />
    //   )}
    // </div>)
}

ReactDOM.render(<App />, document.getElementById('app'));