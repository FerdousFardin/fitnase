import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Shop } from "./components/Shop/Shop";
import { Cart } from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [selectedCart, setSelectedCart] = useState([]);
  const addToCart = (selectedProduct) => {
    setSelectedCart([...selectedCart, selectedProduct]);
  };
  return (
    <div>
      <Header></Header>
      <div className="grid custom-cols">
        <Shop addToCart={addToCart}></Shop>
        <Cart selectedCart={selectedCart}></Cart>
      </div>
    </div>
  );
}

export default App;
