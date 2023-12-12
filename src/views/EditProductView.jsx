import {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {ProductClient} from "../api/ProductClientApi.js";
import {Button, Form, } from "react-bootstrap";
import {PRODUCTS_VIEW_PATH} from "../router/router.jsx";

function EditProductView() {

    const routerParams = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState({});
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");

    const loadProduct = async () => {
        const response = await ProductClient.getProductById(routerParams.productId);
        setProduct(response.data);
        setProductName(response.data.name);
        setProductDescription(response.data.description);
    }


    const handleSave = async () => {
        await ProductClient.updateProduct({
            id: product.id,
            name: productName,
            description: productDescription
        })
    }

    const handleNameInput = (e) => {
        setProductName(e.target.value)
    }

    const handleDescriptionInput = (e) => {
        setProductDescription(e.target.value)
    }

    const handleDelete = async () => {
        await ProductClient.deleteProduct(product.id);
        navigate(PRODUCTS_VIEW_PATH);
    }


    useEffect(() => {
        loadProduct();
    }, [routerParams])

    return (
        <div className="mt-5">
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Product name</Form.Label>
                    <Form.Control type="text" onChange={handleNameInput} value={productName} placeholder="Product name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Product description</Form.Label>
                    <Form.Control as="textarea" onChange={handleDescriptionInput} value={productDescription} rows={3} placeholder="Product description" />
                </Form.Group>
                <div className="d-flex justify-content-between" >
                        <Button onClick={handleSave}>Save</Button>
                        <Button variant="danger" onClick={handleDelete}>Delete</Button>
                </div>

            </Form>
        </div>
    )
}


export default EditProductView;