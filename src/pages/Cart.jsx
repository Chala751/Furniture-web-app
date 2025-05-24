import React from "react";
import { useCart } from "../context/CartContext";
import { Button } from "../componentes/ui/button";

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <section className="p-6 max-w-full mx-auto bg-[#F1E0C6] min-h-screen">
      <h2 className="text-3xl font-bold text-[#6B4F3C] mb-6 text-center">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <ul className="space-y-6">
          {cartItems.map((item, index) => (
            <li
              key={index}
              className="bg-white p-4 rounded-xl shadow-md flex gap-4 items-center hover:shadow-lg transition duration-200"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-md border border-[#e0c9a6]"
              />
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-[#6B4F3C]">{item.title}</h4>
                <p className="text-[#5a3f30] font-medium">Price: ${item.price}</p>
                {item.quantity > 1 && (
                  <p className="text-sm text-[#876c59]">Quantity: {item.quantity}</p>
                )}
              </div>
              <Button
                variant="outline"
                onClick={() => removeFromCart(item.id)}
                className="border-[#B22222] text-[#B22222] hover:bg-[#f9e2e2] transition cursor-pointer"
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
