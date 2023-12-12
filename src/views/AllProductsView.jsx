import ProductCard from "../componetns/card/ProductCard.jsx";
import {useEffect, useState} from "react";
import {ProductClient} from "../api/ProductClientApi.js";

function AllProductsView() {

    const [products, setProducts] = useState([]);

    const loadProducts = async () => {
        const response = await ProductClient.getAllProducts();

        setProducts(response.data);
    }

    useEffect(() => {
        loadProducts();
    }, [])

    return (
        <div className="mt-5">
            {
                products.map(product => {
                    return (
                        <div key={`product-${product.id}`} className="mb-3">
                            <ProductCard  product={product}/>
                        </div>
                    )
                })
            }

        </div>
    )
}


export default AllProductsView;