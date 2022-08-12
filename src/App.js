import { useState, useEffect } from "react";
import axios from "axios";
import { Basket } from "./components/Basket/Basket";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App(props) {
  const [basketOpened, setBasketOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
      axios.get('https://62ebee40705264f263e3bbc6.mockapi.io/items').then(res => {
        setItems(res.data)
      })
      axios.get('https://62ebee40705264f263e3bbc6.mockapi.io/cart').then(res => {
        setCartItems(res.data)
        
      })
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
      <Header cartItems= {cartItems} setCartItems= {setCartItems} onClickBasket={() => setBasketOpened(true)} />
      <Main setCartItems={setCartItems} cartItems={cartItems} items={items} />
    </div>
  );
}

export default App;
