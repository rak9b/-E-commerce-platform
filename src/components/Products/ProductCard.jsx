import React from "react";
import { Heart } from "@heroicons/react/solid";

const ProductCard = ({ product, addToCart }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500 text-sm">{product.description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-bold">${product.price}</span>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
    <button className="absolute top-2 right-2">
      <Heart className="h-6 w-6 text-red-500" />
    </button>
  </div>
);

export default ProductCard;
