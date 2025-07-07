import { plantList } from "../datas/plantList";
const categories = [];
plantList.forEach((plant) => {
	if (!categories.includes(plant.category)) {
		categories.push(plant.category);
	}
});

function ShoppingList() {
  return (
    <div>
      <h2>Liste des catégories de plantes</h2>
      <ul>
        {categories.map((category, index) => {
          return <li key={`${category}-${index}`}>{category}</li>;
        })}
      </ul>
	  <h2>Liste des plantes</h2>
      <ul>
        {plantList.map((plant) => {
          return <li key={plant.id}>{plant.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default ShoppingList;
