import axios from "axios";
import { useState } from "react";
import "./Card.css";

export const Card = ({
  props,
  name,
  price,
  imageUrl,
  onClickFavorite,
  onClickPlus,
}) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const clickFavorite = () => {
    onClickFavorite({ name, price, imageUrl });
    setIsFavorite(!isFavorite);
  };
  const clickPlusCard = (props) => {
    console.log(props.obj)
    onClickPlus({ name, price, imageUrl });
    setIsAdded(!isAdded);
    axios.post("https://62ebee40705264f263e3bbc6.mockapi.io/cart", { name, price, imageUrl });
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
        <div className="card__image">
          {" "}
          <img width={133} height={112} src={imageUrl} alt="Photo" />
        </div>
        <h2 className="card__title">{name}</h2>
        <div className="card__bottom">
          <div className="card__price">
            <div className="card__price-text">Цена:</div>
            <span>{price} $</span>
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
