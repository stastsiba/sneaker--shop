import "./Basket.css";

export const Basket = (props) => {
  return (
    <div className="basket__wrapper">
      <div className="shadow__block">
        <div className="basket">
          <h2>Basket</h2>
          <div className="basket__item">
            <div className="basket__items">
              <div className="basket__border">
                <img
                  width={70}
                  height={70}
                  src="/image/image 5-1.jpg"
                  alt="Photo"
                />
                <div className="basket__items-name">
                  <p className="basket__items-name-text">
                    Мужские Кроссовки Nike Air Max 270
                  </p>
                  <p className="basket__items-name-price">
                    <strong>1300$</strong>
                  </p>
                </div>
                <button className="basket__items-name-button">x</button>
              </div>
            </div>
            <div className="basket__footer">
              <div className="basket__footer-total">
                <div className="basket__items-total-title">Total:</div>
                <div className="basket__items-total-line"></div>
                <div className="basket__footer-sum">
                  <strong>2000$</strong>
                </div>
              </div>
              <div className="basket__footer-total">
                <div className="basket__items-total-title">Tax5%:</div>
                <div className="basket__items-total-line"></div>
                <div className="basket__footer-sum">
                  <strong>10$</strong>
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
        </div>
      </div>
    </div>
  );
};
