import { useState } from "react";
import { AddCategory } from "./Gifts/AddCategory";
import { GiftGrid } from "./Gifts/GiftGrid";

export const App = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (value) => {
    if (
      !categories.findIndex(
        (c) => c.toLocaleLowerCase() === value.toLocaleLowerCase()
      )
    )
      return;
    setCategories((prev) => [value, ...prev]);
  };

  return (
    <>
      <AddCategory onAddCategory={onAddCategory} />

      <ul>
        {
        categories.map((category) => (
          <GiftGrid key={category} category={category} />
        ))
        }
      </ul>
    </>
  );
};
