import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Category = () => {
  const categories = use(categoryPromise);

  return (
    <div className="p-4 sm:p-5 bg-white rounded-lg shadow-sm">
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center sm:text-left">
        All Categories{" "}
        <span className="text-blue-600">({categories.length})</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/category/${category.id}`}
            className={({ isActive }) =>
              `w-full text-center sm:text-left px-4 py-2 rounded-md transition duration-300 font-medium ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-gray-50 text-gray-700 hover:bg-blue-100 hover:text-blue-700"
              }`
            }
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Category;
