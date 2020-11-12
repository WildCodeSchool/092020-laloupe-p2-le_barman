import React from "react";
import axios from "axios";
import Card from "./Card";
import './CardSystem.css';

class CardSystem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            research : "",
            resultDrinks : [],
            drinkIngredients : []
        }
        this.fetchDrinksbyName = this.fetchDrinksByName.bind(this);
    }

    getAllIngre = (array) => {
      let newAray = [];
      for (let i = 1; i < 16; i += 1) {
        if (array[`strIngredient${i}`] === null) {
          return newAray;
        }
        newAray.push(array[`strIngredient${i}`])
      }
      return newAray;
    }

    searchName = (event) => {
      this.setState({research: event.target.value});
    }

    fetchDrinksByName = () => {
      if (this.state.research !== "") {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.research}`
        axios
          .get(url)
          .then((response) => {
            return response.data;
          })
          .then((quote) => {
            this.setState({ drinkIngredients: [], });
            this.setState({ resultDrinks: quote.drinks, research: "" });
          });
      }
    }

    fetchDrinksRandom = () => {      
      const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`
      axios
          .get(url)
          .then((response) => {
            return response.data;
          })
          .then((quote) => {
            this.setState({ drinkIngredients: [], });
            this.setState({ resultDrinks: [quote.drinks[0]], drinkIngredients: this.getAllIngre(quote.drinks[0]) });
          });
    }

  render(){
    return(
      <div>
      <section id="searchEngine">
        <div className="inputLine">
          <div className="form">
            <input id="searchName" type="text" name="search" value={this.state.research} autoComplete="off" onChange={this.searchName}></input>
            <label className="label-search"></label>
          </div>
            <button onClick={this.fetchDrinksByName}>Search</button>
        </div>
        <div className="inputLine2">
          <button onClick={this.fetchDrinksRandom}>Random</button>
        </div>
      </section>
      <section id="cardCont">
        {this.state.resultDrinks.map((drink, index) => <Card drink={drink} key={index} drinkIngredients={this.getAllIngre(drink)} />)}
      </section>
      </div>
    )
  } 
}

export default CardSystem;