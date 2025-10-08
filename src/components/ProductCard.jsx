import React from "react";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const { category, image, name, price, id } = product;
  return (
    <div className="card bg-base-100 shadow-sm border hover:scale-105 transition ease-in-out">
      <figure className="h-48 overflow-hidden">
        <img className="w-full object-cover" src={image} alt="Furniture" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <p>category: {category}</p>
        <p>Price: ${price}</p>
        <div className="card-actions justify-end">
          {/* <button className="btn btn-outline"></button> */}
          <Link to={`/product/${id}`} className="btn btn-outline">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
