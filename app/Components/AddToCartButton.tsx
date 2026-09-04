"use client";

import { useCart } from "../context/cartContext";

type ProductProps = {
    product: {
        id: number;
        heading: string;
        price: number;
        image: string;
    };
};

export default function AddToCartButton({ product }: ProductProps) {
    const { addToItem } = useCart();

    const handleClick = () => {
        addToItem({
            id: product.id,
            name: product.heading,
            price: product.price,
            quantity: 1,
            image: product.image,
        });
    };

    return (
        <button
            onClick={handleClick}
            className="border border-black rounded-[15px] cursor-pointer hover:bg-black hover:text-white transition duration-300 font-normal text-[20px] w-[215px] h-[64px]"
        >
            Add To Cart
        </button>
    );
}