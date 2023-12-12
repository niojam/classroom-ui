import {Card} from "react-bootstrap";
import {NavLink} from "react-router-dom";

function ProductCard({product}) {
    return (
            <Card >
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <NavLink className="nav-link" to={`/product/${product.id}/edit`}>Click to edit</NavLink>
                </Card.Body>
            </Card>
    )
}


export default ProductCard;