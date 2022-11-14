import { plantList } from "../data/plantList";
import "../styles/shoppingList.css";
import PlantItem from "./PlantItem";
import Categories from "./Categories";
import { useState, useEffect } from "react";

function ShoppingList({ cart, updateCart }) {
  // recupérer chaque valeur de notre liste de plante, puis commencer le traitement de la gauche vers
  // la droite en lui appliquant la fonction choisie
  // si l'objet plante suivant et precedent on la même categorie =>
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );
  const [mainlist, setMainlist] = useState("");
  function addToCart(name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name);
    if (currentPlantSaved) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantSaved.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }
  return (
    <div className="lmj-shopping-list">
      <Categories
        mainList={mainlist}
        setMainList={setMainlist}
        categories={categories}
      />
      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light, price, category }) =>
          !mainlist || mainlist === category ? (
            <div key={id}>
              <PlantItem
                cover={cover}
                name={name}
                water={water}
                light={light}
                price={price}
              />
              <button onClick={() => addToCart(name, price)}>Ajouter</button>
            </div>
          ) : null
        )}
      </ul>
    </div>
  );
}
export default ShoppingList;
