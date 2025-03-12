import Image from "next/image";

interface ProductCardProps {
    product: {
        id: number;
        name: string;
        price: number;
        imageUrl: string;
    };
}

export const ProductCard = (props: ProductCardProps) => {
    const {
        product: { id, name, price, imageUrl },
    } = props;

    return (
        <div className="rounded-lg border p-4 shadow-md">
            <Image
                src={imageUrl}
                width={600}
                height={600}
                alt={name}
                className="mb-4 h-48 w-full object-cover"
            />
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-gray-600">${price}</p>
            {/* <div className="mt-4 flex gap-2">
                <AddToCartButton productId={id} />
                <AddToFavoritesButton productId={id} />
            </div> */}
        </div>
    );
};
