"use client";

import { createContext, useContext, useState } from "react";

type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
};

type CartContextType = {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    cart: CartItem[];
    addToItem: (item: CartItem) => void;
};

const CartContext = createContext<CartContextType>({
    isOpen: false,
    setIsOpen: () => {},
    cart: [],
    addToItem: () => {},
});

export const CartProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [cart, setCart] = useState<CartItem[]>([]);

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

    return (
        <CartContext.Provider
            value={{
                isOpen,
                setIsOpen,
                cart,
                addToItem,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);