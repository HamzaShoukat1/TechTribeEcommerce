"use client";

import { createContext, useContext, useState } from "react";
import type { StaticImageData } from "next/image";
import { useLocalStorage } from "../hooks/Uselocalstorage";

export type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string | StaticImageData;
};

type CartContextType = {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    cart: CartItem[];
    addToItem: (item: CartItem) => void;
    removeItem: (id: number) => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    subtotal: number;
    isInitialized: boolean;
};

const CartContext = createContext<CartContextType>({
    isOpen: false,
    setIsOpen: () => { },
    cart: [],
    addToItem: () => { },
    removeItem: () => { },
    increaseQuantity: () => { },
    decreaseQuantity: () => { },
    subtotal: 0,
    isInitialized: false,
});

export const CartProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [cart, setCart, isInitialized] = useLocalStorage<CartItem[]>("shopping_cart", []);






    const addToItem = (item: CartItem) => {
        setCart((prev) => {
            const existing = prev.find((i) => i.id === item.id);

            if (existing) {
                return prev.map((i) =>
                    i.id === item.id
                        ? {
                            ...i,
                            quantity: i.quantity + 1,
                        }
                        : i
                );
            }

            return [
                ...prev,
                {
                    ...item,
                    quantity: 1,
                },
            ];
        });

        setIsOpen(true);
    };

    const removeItem = (id: number) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const increaseQuantity = (id: number) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decreaseQuantity = (id: number) => {
        setCart((prev) =>
            prev
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                isOpen,
                setIsOpen,
                cart,
                addToItem,
                removeItem,
                increaseQuantity,
                decreaseQuantity,
                subtotal,
                isInitialized,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);