import React from "react";
import { useCart } from "../context/CartContext";
import { Button } from "../componentes/ui/button";

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-[#6B4F3C] mb-6">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <ul className="space-y-6">
          {cartItems.map((item, index) => (
            <li
              key={index}
              className="bg-white p-4 rounded-lg shadow flex gap-4 items-center"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-[#6B4F3C]">{item.title}</h4>
                <p className="text-gray-600">Price: ${item.price}</p>
                {item.quantity > 1 && (
                  <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                )}
              </div>
              <Button
                variant="outline"
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 border-red-500"
              >
                Remove
              </Button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
