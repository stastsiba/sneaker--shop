import React from "react";
import { Card } from "../Card/Card";
import "./Main.css";
import "../Card/Card.css";
const sneakers = [
  {
    photo: (
      <img width={133} height={112} src="/image/image 5-1.jpg" alt="Photo" />
    ),
    price: "1200$",
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
  },
  {
    photo: (
      <img width={133} height={112} src="/image/image 5-2.jpg" alt="Photo" />
    ),
    price: "1300$",
    name: "Мужские Кроссовки Nike Air Max 270",
  },
  {
    photo: (
      <img width={133} height={112} src="/image/image 5-3.jpg" alt="Photo" />
    ),
    price: "1100$",
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
  },
  {
    photo: (
      <img width={133} height={112} src="/image/image 5-4.jpg" alt="Photo" />
    ),
    price: "1090$",
    name: "Кроссовки Puma X Aka Boku Future Rider",
  },
  {
    photo: (
      <img width={133} height={112} src="/image/image 5-5.jpg" alt="Photo" />
    ),
    price: "1500$",
    name: "Мужские Кроссовки Under Armour Curry 8",
  },
  {
    photo: (
      <img width={133} height={112} src="/image/image 5-6.jpg" alt="Photo" />
    ),
    price: "1080$",
    name: "Мужские Кроссовки Nike Kyrie 7",
  },
  {
    photo: (
      <img width={133} height={112} src="/image/image 5-7.jpg" alt="Photo" />
    ),
    price: "1000$",
    name: "Мужские Кроссовки Jordan Air Jordan 11",
  },
  {
    photo: (
      <img width={133} height={112} src="/image/image 5-8.jpg" alt="Photo" />
    ),
    price: "1500$",
    name: "Мужские Кроссовки Nike LeBron XVIII",
  },
  {
    photo: (
      <img width={133} height={112} src="/image/image 5-9.jpg" alt="Photo" />
    ),
    price: "1300$",
    name: "Мужские Кроссовки Nike Lebron XVIII Low",
  },
  {
    photo: (
      <img width={133} height={112} src="/image/image 5-10.jpg" alt="Photo" />
    ),
    price: "1100$",
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
  },
];

const Main = () => {
  return (
    <div className="main__wrapper">
      <div className="main__header">
        <h2 className="main__header-title">All sneakers</h2>
        <input className="" type="text" placeholder="Search..." />
      </div>
      <div className="main__card"></div>
      <div className="card">
        {sneakers.map((item) => (
          <Card name={item.name} price={item.price} photo={item.photo} />
        ))}
      </div>
    </div>
  );
};

export default Main;
