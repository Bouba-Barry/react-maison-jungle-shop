import { plantList } from "../data/plantList";
import "../styles/categories.css";

function Categories({ mainList, setMainList, categories }) {
  //   function UpdateList(cate) {
  //     let plantlist = plantList.filter((plant) => plant.category === cate);
  //     console.log(plantlist);
  //     setMainList(plantlist);
  //   }
  function Reset() {
    setMainList("");
  }

  return (
    <div ClassName="lmj-categories">
      <h2>Nos Categories</h2>
      <select
        className="lmj-categories-select "
        value={mainList}
        onChange={(e) => setMainList(e.target.value)}
      >
        <option value={mainList}>---</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button onClick={() => Reset()}>Réinitialiser</button>
    </div>
  );
}
export default Categories;
