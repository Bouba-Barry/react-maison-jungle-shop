import "../styles/cart.css";
import { useState, useEffect } from "react";

function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(true);

  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );
  // la decomposition , un peu comme la destructuration = avec les accolade

  useEffect(() => {
    document.title = `LMJ: ${total}€ d'achat `;
  }, [total]);
  // il renvoie deux elts que ns recupérons avk
  /** useState('etatInitail')
   * cart = cartState[0]
   * updateCart = cartState[1]
   */
  const removeProduct = (prod) => {
    updateCart(cart.filter((plant) => plant.name !== prod));
    //  (plant) => plant.name !== name
  };
  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      {cart.length > 0 ? (
        <div>
          <h2>Panier</h2>
          <ul>
            {cart.map(({ name, price, amount }, index) => (
              <div key={`${name}-${index}`}>
                {name} {price}€ x {amount}
                <button
                  className="plant-delete"
                  onClick={() => {
                    removeProduct(name);
                  }}
                >
                  X
                </button>
              </div>
            ))}
          </ul>
          <h3>Total :{total}€</h3>
          <button onClick={() => updateCart([])}>Vider le panier</button>
        </div>
      ) : (
        <div>Votre panier est vide</div>
      )}
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(true)}
      >
        Ouvrir le Panier
      </button>
    </div>
  );
}

export default Cart;
