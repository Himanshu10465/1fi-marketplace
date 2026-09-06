import React from "react";

const categories = ["Electronics", "Fashion", "Groceries", "Books"];

export default function CategoryList() {
  return (
    <div className="category-list">
      {categories.map((cat, index) => (
        <button key={index} className="category-btn">
          {cat}
        </button>
      ))}
    </div>
  );
}

