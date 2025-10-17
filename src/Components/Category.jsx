import React, { use } from "react";
import { NavLink } from "react-router";
const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Category = () => {
  const categories = use(categoryPromise);
  console.log(categories);
  return (
    <div>
      <h2 className="text-xl font-bold">All Caterogy ({categories.length})</h2>

      <div className="grid grid-cols-1 mt-5">
        {categories.map((categori) => (
          <NavLink
            key={categori.id}
            className={"btn bg-white border-0 hover:bg-gray-200"}
            to={`/category/${categori.id}`}
          >
            {" "}
            {categori.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Category;
