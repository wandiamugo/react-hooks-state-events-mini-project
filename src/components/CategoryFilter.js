import React from "react";
import { CATEGORIES } from "../data";

function CategoryFilter({ categories, onCategoryFilter })  {
  const [selected, setSelected] = useState(0);

  const buttonCategory = categories.map((category, index) => {
    <button key={category} className={selected === index ? "selected" : ""
  } onClick={() => {onCategoryFilter(category)
  setSelected(index)}}>{category}</button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttonCategory}
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
