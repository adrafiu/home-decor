import React from "react";
import { useParams } from "react-router";
import useProducts from "../hooks/useProducts";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, loading } = useProducts();
  const product = products.find((p) => p.id === Number(id));

  if (loading) return <p>Loading.......</p>;

  const { name, image, category, price, description } = product || {};

  // localaStorage
  const handleAddToWishList = () => {
    const existingList = JSON.parse(localStorage.getItem("wishlist"));
    let updatedList = [];
    if (existingList) {
      const isDuplicate = existingList.some((p) => p.id === product.id);
      if (isDuplicate) return alert("Sorry, Product is already taken!");
      updatedList = [...existingList, product];
    } else {
      updatedList.push(product);
    }

    localStorage.setItem("wishlist", JSON.stringify(updatedList));
     alert("Product added to wishlist!");
  };

  return (
    <div className="card bg-base-100 shadow-sm w-96 mx-auto ">
      <figure className="h-48 overflow-hidden">
        <img className="w-96 object-cover" src={image} alt="Furniture" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <p>category: {category}</p>
        <p>Price: ${price}</p>
        <div className="card-actions justify-center">
          <button onClick={handleAddToWishList} className="btn btn-outline">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
