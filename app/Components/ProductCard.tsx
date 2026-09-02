
type ProductTypes = {
    product: {
        id: number,
        stock: string,
        image: string,
        description: string,
        previous_price: string,
        latest_price: string
    }
}

export default function productCard({ product }: ProductTypes) {
    return (
        <div className="">
            <h2>{product.stock}</h2>
            <img src={product.image[0]} />
            <h2>{product.description}</h2>
            <h3>{product.previous_price}</h3>
            <h2>{product.latest_price}</h2>

        </div>
    )
}



