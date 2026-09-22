import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <div>
      <Header />
      <Navbar cartCount={cart.length} />
      <Home cart={cart} addToCart={addToCart} />
    </div>
  );
}

export default App;