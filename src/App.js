import { useState, useEffect } from "react";
import axios from "axios";
import { Basket } from "./components/Basket/Basket";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { Route, Routes } from "react-router-dom";
import { Favorite } from "./components/Favorites/Favorites";

function App(props) {
  const [basketOpened, setBasketOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://62ebee40705264f263e3bbc6.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://62ebee40705264f263e3bbc6.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
    axios
      .get("https://62ebee40705264f263e3bbc6.mockapi.io/favorites")
      .then((res) => {
        setFavorites(res.data);
      });
  }, []);

  return (
    <div className="wrapper">
      {basketOpened ? (
        <Basket
          setCartItems={setCartItems}
          cartItems={cartItems}
          onClose={() => setBasketOpened(false)}
        />
      ) : null}
      <Header
        cartItems={cartItems}
        setCartItems={setCartItems}
        onClickBasket={() => setBasketOpened(true)}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              setCartItems={setCartItems}
              cartItems={cartItems}
              items={items}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          }
        />
      </Routes>
      <Routes>
        <Route path="/favorites" element={<Favorite items={favorites} setFavorites={setFavorites} />} />
      </Routes>
    </div>
  );
}

export default App;
