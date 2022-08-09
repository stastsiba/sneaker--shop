import "./EmptyBasket.css";

export const EmptyBasket = ({onClose}) => {
  return (
    <div className="empty-basket__wrapper">
      <div>
        <img
          className="empty-basket__image"
          src="/image/Group 117.jpg"
          alt="Image"
        />
      </div>
      <div>
        <h2 className="empty-basket__title">Cart is empty</h2>
      </div>
      <div>
        {" "}
        <p className="empty-basket__paragraph">
          Add at least one pair of sneakers to place an order.
        </p>
      </div>

      <div onClick = {onClose} className="empty-basket__button-wrapper">
        <img
          className="empty-basket__button-image"
          src="/image/Vector-left.svg"
          alt="icon"
        />
        <button className="empty-basket__button">
          <span className="empty-basket__button-text">Come back</span>
        </button>
      </div>
    </div>
  );
};
