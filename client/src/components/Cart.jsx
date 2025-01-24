/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cartItems.length > 0 ? (
        <>
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-100 p-4 rounded-lg"
              >
                <div>
                  <h2 className="text-lg font-medium">{item.name}</h2>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                <p className="text-lg font-bold">₹{item.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold">
              Total: ₹{totalPrice.toFixed(2)}
            </h2>
            <Link
              to="/payment-form"
              className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
              Proceed to Payment
            </Link>
          </div>
        </>
      ) : (
        <p className="text-gray-500">Your cart is empty. Add some services!</p>
      )}
    </div>
  );
};

export default Cart;
