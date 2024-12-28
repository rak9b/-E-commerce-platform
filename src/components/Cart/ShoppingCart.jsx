import React from "react";
import CartItem from "./CartItem";

const ShoppingCart = ({ cart, updateQuantity, removeItem }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6 rounded-lg shadow-lg bg-white">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
          />
        ))
      )}
      <div className="flex justify-between mt-6 pt-4 border-t">
        <span className="font-medium">Total:</span>
        <span className="text-xl font-bold">${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ShoppingCart;
