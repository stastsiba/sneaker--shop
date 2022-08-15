import { Route, Routes } from "react-router-dom"
import "./Favorites.css"
import { Card } from "../Card/Card";

export const Favorite = (props, {favorited}) => {
    return (
        <div className="favorites__wrapper">
            {props.items
          .map((obj, index) => (
            <Card
              onClickFavorite={() => {
                console.log(1);
              }}
              key={index}
              name={obj.name}
              price={obj.price}
              imageUrl={obj.imageUrl}
              obj={obj}
              favorited={true}
            />
          ))}
        </div>
    )
}