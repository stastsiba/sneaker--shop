import { useState } from "react";
import { Basket } from "./components/Basket/Basket";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [basket, setBasket] = useState(null)
  return (
    <div className="wrapper">
      {/* <Basket /> */}
      <Header />
      <Main />
    </div>
  );
}

export default App;
