import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import logo from "../assets/logo.png";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import "../styles/layout.css";

function App() {
  // on recupère la valeur du panier sauvegarder
  const savedCart = localStorage.getItem("cart");

  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  // l'evenement qui enregistre le panier qd le user le recharge
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <div>
      <Banner>
        {" "}
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      <div className="lmj-layout-inner">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
