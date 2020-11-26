import React from "react";

const Card = (props) => {
  return (
    <div className="cardBody">
      <div className="cardTitle">
        <img className="cardImg" src={props.drink.strDrinkThumb} />
        <div className="cardNaming">
          <h4 className="cardName">{props.drink.strDrink}</h4>
          <ul className="cardIngd">
            {props.drinkIngredients.map((ingredient, id) => (
              <li className="cardIngredient" ingredient={ingredient} key={id}>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="cardBtm">
        <h4 className="cardWay">How to :</h4>
        <p>{props.drink.strInstructions}</p>
      </div>
    </div>
  );
};

export default Card;
