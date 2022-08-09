import React, { useState } from "react";
import { Card } from "../Card/Card";
import "./Main.css";
import "../Card/Card.css";
import { Basket } from "../Basket/Basket";
import App from "../../App";

const Main = (props) => {
  const onAddToCart = (item) => {
    props.setCartItems([...props.cartItems, item]);
  };
  const [searchValue, setSearchValue] = useState("");
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="main__wrapper">
      <div className="main__header">
        <h2 className="main__header-title">
          {searchValue ? `Search: "${searchValue}"` : "All sneakers"}
        </h2>
        <input
          onChange={onChangeSearchInput}
          className=""
          type="text"
          placeholder="Search..."
        />
      </div>
      <div className="main__card"></div>
      <div className="card">
        {props.items
          .filter((obj) => obj.name.toLowerCase().includes(searchValue))
          .map((obj, index) => (
            <Card
              key={index}
              onClickFavorite={() => {
                console.log(1);
              }}
              onClickPlus={(obj) => onAddToCart(obj)}
              name={obj.name}
              price={obj.price}
              imageUrl={obj.imageUrl}
              obj={obj}
            />
          ))}
      </div>
    </div>
  );
};

export default Main;
