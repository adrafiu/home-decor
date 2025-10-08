import React, { useState } from "react";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const { products } = useProducts();
  // products search
  const [search, setSearch] = useState("");
  const term = search.trim().toLowerCase();
  const searchProducts = term
    ? products.filter((product) => product.name.toLowerCase().includes(term))
    : products;
  // console.log(searchProducts);
  

  return (
    <div>
      <div className="flex justify-between py-5 items-center">
        <h1 className="text-3xl font-semibold ">
          All Products{" "}
          <span className="text-sm text-gray-500">
            ({products.length}) Products Found
          </span>{" "}
        </h1>
        {/* search box */}
        <label className="input">
          {/* <span className="label">https://</span> */}
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Products"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {searchProducts.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
