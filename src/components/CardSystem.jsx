import React from "react";
import axios from "axios";
import './CardSystem.css';

class CardSystem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            research : "",
            resultDrinks : []
        }

    }

    searchName = () => {
      this.setState({research: document.getElementById('searchName').value});
    }

    fetchDrinksByName = () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.research}`
      console.log(url);
      document.getElementById('searchName').value = null;
    }

    fetchDrinksRandom = () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`
    }

  render(){
    return(
      <section id="searchEngine">
        <div>
          <input id="searchName" type="text" placeholder="Enter a name:" onChange={this.searchName}></input>
          <button onClick={this.fetchDrinksByName}>Search</button>
        </div>
        <div>
          <button onClick={this.fetchDrinksRandom}>Random</button>
        </div>
      </section>
    )
  } 
}

export default CardSystem;