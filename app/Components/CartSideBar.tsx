// components/CartSidebar.tsx
"use client"
import { useCart } from "../context/cartContext";
export default function CartSidebar() {
    const { isOpen, setIsOpen, cart } = useCart();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/50">
            <div className="w-80 bg-white h-full p-6 shadow-xl flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">Your Cart</h2>
                        <button onClick={() => setIsOpen(false)} className="text-gray-500 font-bold">✕</button>
                    </div>
                    {cart.length === 0 ? (
                        <p className="text-gray-500">Cart is empty.</p>
                    ) : (
                        cart.map((item) => (
                            <div key={item.id} className="flex justify-between py-2 border-b">
                                <span>{item.name} (x{item.quantity})</span>
                                <span>${item.price * item.quantity}</span>
                                <span>{item.image}</span>
                            </div>
                        ))
                    )}
                </div>
                <button className="w-full bg-black text-white py-2 rounded mt-4">
                    Checkout
                </button>
            </div>
        </div>
    );
}
