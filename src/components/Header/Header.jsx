import React from "react";
import "./Heder.css";


const Header = (props) => {
  return (
    <header className="header">
      <div className="header__left">
        <img className="header__left-logo" src="/image/logo.png" alt="Logo" />
        <div className="header__title">
          <h2 className="header__logo-title">REACT SNEAKERS</h2>
          <span className="header__logo-title-text">
            Магазин лучших кроссовок
          </span>
        </div>
      </div>
      <div className="header__right">
        <button className="header__right-basket-image-btn">
          <img
            className="header__right-basket-image"
            src="/image/basket.svg"
            alt="basket"
          />
        </button>
        <span className="header__right-basket-image-text">1205 $</span>
        <button className="header__right-basket-image-btn">
          <img
            className="header__right-like-image"
            src="/image/like-gray.svg"
            alt="like"
          />
        </button>
        <button className="header__right-basket-image-btn">
          <img
            className="header__right-log-in-image"
            src="/image/log-in.svg"
            alt="log-in"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
