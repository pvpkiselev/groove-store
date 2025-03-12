import { ProductCard } from "@/entities/Product";

import { getProducts } from "../api/getProducts";

export async function ProductList() {
    const products = await getProducts();

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
