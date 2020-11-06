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
        this.fetchDrinksbyName = this.fetchDrinksByName.bind(this);
    }

    getAllIngre = (array) => {
      const newAray = [];
      for (let i = 1; i < 16; i += 1) {
        if (array[`strIngredient${i}`] === null) {
          return newAray;
        }
        newAray.push(array[`strIngredient${i}`])
      }
      return newAray;
    }

    searchName = () => {
      this.setState({research: document.getElementById('searchName').value});
    }

    fetchDrinksByName = () => {
      if (document.getElementById('searchName').value !== "") {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.research}`
        axios
          .get(url)
          .then((response) => {
            return response.data;
          })
          .then((quote) => {
            this.setState({ resultDrinks: quote.drinks });
          });
        document.getElementById('searchName').value = null;
      } else if (document.getElementById('searchName').value === "") {
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
            this.setState({ resultDrinks: quote.drinks[0] });
          });
    }

    createCardbyName = () => {
      // reinitialisation of the container
      document.getElementById('cardCont').innerHTML = "";
      for (let i = 0; i < this.state.resultDrinks.length; i++) {
      // creation of the main frame of the card
      const cardBody = document.createElement("div");
      cardBody.classList.add("cardBody");
      // creation of the subframe for the upper part
      const cardTitle = document.createElement("div");
      cardBody.appendChild(cardTitle);
      cardTitle.classList.add("cardTitle");
      // creation of the image frame
      const cardImg = document.createElement("img");
      cardImg.src = `${this.state.resultDrinks[i].strDrinkThumb}`;
      cardImg.classList.add("cardImg");
      cardTitle.appendChild(cardImg);
      // creation of the name/ingredient frame
      const cardNaming = document.createElement("div");
      cardNaming.classList.add("cardNaming");
      cardTitle.appendChild(cardNaming);
      // creation of the name frame
      const cardName = document.createElement("p");
      cardName.innerText = `${this.state.resultDrinks[i].strDrink}`;
      cardName.classList.add("cardName");
      cardNaming.appendChild(cardName);
      // creation of the ingredient frame
      const cardIngd = document.createElement("ul");
      cardIngd.classList.add("cardIngd");
      cardNaming.appendChild(cardIngd);
      // test ingredient making
      const allIngredients = this.getAllIngre(this.state.resultDrinks[i]);
      const createCardIngredient = (el) => {
        const cardIngredient = document.createElement("li");
        cardIngredient.innerText = `${el}`;
        cardIngredient.classList.add("cardIngredient");
        cardIngd.appendChild(cardIngredient);
      }
      allIngredients.forEach(el => createCardIngredient(el));  
      // creation of the bottom subframe
      const  cardBtm = document.createElement("div");
      cardBtm.classList.add("cardBtm");
      cardBody.appendChild(cardBtm);
      // creation of cardWay frame
      const cardWay = document.createElement("h4");
      cardWay.innerText = "How to :"
      cardBtm.appendChild(cardWay);
      // creation of instructions frame
      const cardInstruct = document.createElement("p");
      cardInstruct.innerText = `${this.state.resultDrinks[i].strInstructions}`;
      cardInstruct.classList.add("cardInstruct");
      cardBtm.appendChild(cardInstruct);
      //append the whole card to the container
      document.getElementById('cardCont').appendChild(cardBody);
    }
    }

    createCardRandom = () => {
      // reinitialisation of the container
      document.getElementById('cardCont').innerHTML = "";
      // creation of the main frame of the card
      const cardBody = document.createElement("div");
      cardBody.classList.add("cardBody");
      // creation of the subframe for the upper part
      const cardTitle = document.createElement("div");
      cardBody.appendChild(cardTitle);
      cardTitle.classList.add("cardTitle");
      // creation of the image frame
      const cardImg = document.createElement("img");
      cardImg.src = `${this.state.resultDrinks.strDrinkThumb}`;
      cardImg.classList.add("cardImg");
      cardTitle.appendChild(cardImg);
      // creation of the name/ingredient frame
      const cardNaming = document.createElement("div");
      cardNaming.classList.add("cardNaming");
      cardTitle.appendChild(cardNaming);
      // creation of the name frame
      const cardName = document.createElement("h4");
      cardName.innerText = `${this.state.resultDrinks.strDrink}`;
      cardName.classList.add("cardName");
      cardNaming.appendChild(cardName);
      // creation of the ingredient frame
      const cardIngd = document.createElement("ul");
      cardIngd.classList.add("cardIngd");
      cardNaming.appendChild(cardIngd);
      // ingredient making
      const allIngredients = this.getAllIngre(this.state.resultDrinks);
      const createCardIngredient = (el) => {
        const cardIngredient = document.createElement("li");
        cardIngredient.innerText = `${el}`;
        cardIngredient.classList.add("cardIngredient");
        cardIngd.appendChild(cardIngredient);
      }
      allIngredients.forEach(el => createCardIngredient(el));  
      // creation of the bottom subframe
      const  cardBtm = document.createElement("div");
      cardBtm.classList.add("cardBtm");
      cardBody.appendChild(cardBtm);
      // creation of cardWay frame
      const cardWay = document.createElement("h4");
      cardWay.innerText = "How to :"
      cardBtm.appendChild(cardWay);
      // creation of instructions frame
      const cardInstruct = document.createElement("p");
      cardInstruct.innerText = `${this.state.resultDrinks.strInstructions}`;
      cardInstruct.classList.add("cardInstruct");
      cardBtm.appendChild(cardInstruct);
      //append the whole card to the container
      document.getElementById('cardCont').appendChild(cardBody);
    }

  render(){
    return(
      <div>
      <section id="searchEngine">
        <div className="inputLine">
          <div>
            <input id="searchName" type="text" placeholder="Enter a name:" onChange={this.searchName}></input>
            <button onClick={this.fetchDrinksByName}>Search</button>
          </div>
          <button onClick={this.createCardbyName}>Create</button>
        </div>
        <div className="inputLine2">
          <button onClick={this.fetchDrinksRandom}>Search Random</button>
          <button onClick={this.createCardRandom}>Create Random</button>
        </div>
      </section>
      <section id="cardCont">
      </section>
      </div>
    )
  } 
}

export default CardSystem;