import { useState } from "react";
import "./Card.css";

export const Card = (props) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const clickFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  const clickPlusCard = () => {
    setIsAdded(!isAdded);
  };
  return (
    <div className="card">
      <div className="card__wrapper">
        <img
          className="card__btn-like"
          onClick={clickFavorite}
          src={isFavorite ? "/image/Group 90.svg" : "/image/Group 90-1.svg"}
          alt="icon"
        />
        <div className="card__image">{props.photo}</div>
        <h2 className="card__title">{props.name}</h2>
        <div className="card__bottom">
          <div className="card__price">
            <div className="card__price-text">Цена:</div>
            <span>{props.price}</span>
          </div>
          <img
            className="card__btn-plus"
            onClick={clickPlusCard}
            src={isAdded ? "/image/Group 95.svg" : "/image/Group 91-1.svg"}
            alt="button"
          />
        </div>
      </div>
    </div>
  );
};
