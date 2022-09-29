import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Shop } from "./components/Shop/Shop";
import { Cart } from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [selectedItem, setselectedItem] = useState([]);
  const addToList = (selectedProduct) =>
    setselectedItem([...selectedItem, selectedProduct]);
  return (
    <div>
      <Header></Header>
      <div className="grid custom-cols">
        <Shop addToList={addToList}></Shop>
        <Cart selectedItem={selectedItem}></Cart>
      </div>
    </div>
  );
}

export default App;
