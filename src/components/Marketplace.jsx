import React, { useEffect, useState } from "react";
import Header from "./Header";
import CategoryList from "./CategoryList";
import ProductGrid from "./ProductGrid";
import { fetchProducts } from "../../api/products";

export default function Marketplace() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div className="marketplace">
      <Header />
      <CategoryList />
      <ProductGrid products={products} />
    </div>
  );
}
