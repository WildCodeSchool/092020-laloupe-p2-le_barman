import React from "react";
// import axios from "axios";

class CardSystem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            researchName : "",
            researchIngredient : "",
            name : "strDrink",
            instructions : "strInstrutions",
            ingredients : "demandé jérémy pour filter",
            image : "strDrinkThumb"
        }

    }

    searchName = () => {
      this.setState({researchName: document.getElementById('searchName').value});
    }

    searchIngredient = () => {
      this.setState({researchIngredient: document.getElementById('searchIngredient').value});
    }

    fetchDrinksByName = () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.researchName}`
      console.log(url);
      document.getElementById('searchName').value = null;
    }

    fetchDrinksByIngredient = () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${this.state.researchIngredient}`
      console.log(url);
      document.getElementById('searchName').value = null;
    }

  render(){
    return(
      <section>
        <div>
          <input id="searchName" type="text" placeholder="Enter a name:" onChange={this.searchName}></input>
          <button onClick={this.fetchDrinksByName}>Search</button>
        </div>
        <div>        
        </div>
      </section>
    )
  } 
}

export default CardSystem;