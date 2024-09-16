import React, { useState } from "react";
import useWhyDidYouUpdate from "ahooks/lib/useWhyDidYouUpdate";

const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

type CategoriesProps = {
  value: number;
  onChangeCategory: (i: number) => void;
};
const Categories: React.FC<CategoriesProps> = React.memo(
  ({ value, onChangeCategory }) => {
    // const [activeIndex, setActiveIndex] = useState(0);

    useWhyDidYouUpdate("Categories", { value, onChangeCategory });

    return (
      <div className="categories">
        <ul>
          {categories.map((categoryName, index) => (
            <li
              key={index}
              onClick={() => onChangeCategory(index)}
              className={value === index ? "active" : ""}
            >
              {categoryName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);
export default Categories;
