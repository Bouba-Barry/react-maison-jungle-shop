import CareScale from "./CareScale";
import "../styles/plantItem.css";

function PlantItem({ name, cover, id, light, water, price }) {
  return (
    <div>
      <li key={id} className="lmj-plant-item">
        <span className="lmj-plant-item-price">{price}€</span>
        <img
          className="lmj-plant-item-cover"
          src={cover}
          alt={`${name} cover`}
        />
        {name}
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </li>
    </div>
  );
}

export default PlantItem;
