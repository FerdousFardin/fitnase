import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Shop } from "./components/Shop/Shop";
import { Cart } from "./components/Cart/Cart";
import { useState } from "react";
import { Blog } from "./components/Blog/Blog";

function App() {
  const [selectedItem, setselectedItem] = useState([]);
  const addToList = (selectedProduct) =>
    setselectedItem([...selectedItem, selectedProduct]);
  return (
    <div>
      <Header></Header>
      <main className="grid custom-cols">
        <Shop addToList={addToList}></Shop>
        <Cart selectedItem={selectedItem}></Cart>
      </main>
      <Blog></Blog>
    </div>
  );
}

export default App;
