import ProductCard from "../componetns/card/ProductCard.jsx";

function AllProductsView() {

    const mockData = [
        {
            id: 1,
            name: "testname",
            description: "Some quick example text to build on the card title and make up the\n" +
                "                        bulk of the card's content."
        },
        {
            id: 2,
            name: "Second product",
            description: "Product  Description: the beeeest."
        },
        {
            id: 3,
            name: "Secasdsdond product",
            description: "Product  sadasdsadasdDescription: the beeeest."
        },
    ]

    return (
        <div className="mt-5">
            {
                mockData.map(product => {
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