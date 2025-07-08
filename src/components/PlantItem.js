import CareScale from "./CareScale";
import "../styles/PlantItem.css";

function PlantItem({ name, cover, id, light, water }) {
  return (
    <li className="lmj-plant-item">
      <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
      <h3>{name}</h3>
      <CareScale careType="water" scaleValue={water} />
      <CareScale careType="light" scaleValue={light} />
    </li>
  );
}

export default PlantItem;
