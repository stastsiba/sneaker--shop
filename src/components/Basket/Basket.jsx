import { useState } from "react";
import { Card } from "../Card/Card";
import "./Basket.css";
import axios from "axios";
import { EmptyBasket } from "../EmptyBasket/EmptyBasket";

export const Basket = ({ setCartItems, cartItems, onClose}) => {

  const priceItems = [];
  const onRemoveItem = (obj) => {
    axios.delete(`https://62ebee40705264f263e3bbc6.mockapi.io/cart/${obj}`);
    setCartItems((cartItems) => cartItems.filter((item) => item.id !== obj));
  };
  return (
    <div className="basket__wrapper">
      <div className="shadow__block">
        <div className="basket">
          <div className="basket__header-wrapper">
            <h2>Basket</h2>
            <button onClick={onClose} className="basket__button-header">
              x
            </button>
          </div>
          {cartItems.length > 0 ? (
            <div className="basket__item">
              <div className="basket__items">
                {cartItems.map((obj) => (
                  <div className="basket__border">
                    <img
                      width={70}
                      height={70}
                      src={obj.imageUrl}
                      alt="Photo"
                    />
                    <div className="basket__items-name">
                      <p className="basket__items-name-text">{obj.name}</p>
                      <p className="basket__items-name-price">
                        <strong>{obj.price} $</strong>
                      </p>
                    </div>
                    <button
                      onClick={() => onRemoveItem(obj.id)}
                      className="basket__items-name-button"
                    >
                      x
                    </button>
                  </div>
                ))}
              </div>
              <div className="basket__footer">
                <div className="basket__footer-total">
                  <div className="basket__items-total-title">Total:</div>
                  <div className="basket__items-total-line"></div>
                  {cartItems.map((price) => console.log(priceItems.push(price.price)))}
                  <div className="basket__footer-sum">
                    <strong>
                      {priceItems.reduce((sum, cur) => sum + cur, 0)}$
                    </strong>
                  </div>
                </div>
                <div className="basket__footer-total">
                  <div className="basket__items-total-title">Tax5%:</div>
                  <div className="basket__items-total-line"></div>
                  <div className="basket__footer-sum">
                    <strong>{priceItems.reduce((sum, cur) => sum + cur, 0) * 0.05}$</strong>
                  </div>
                </div>
                <div className="footer__btn">
                  <button className="basket__footer-btn">
                    {" "}
                    <span>Checkout</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <EmptyBasket onClose={onClose} />
          )}
        </div>
      </div>
    </div>
  );
};
