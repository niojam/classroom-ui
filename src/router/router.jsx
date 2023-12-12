import App from "../App.jsx";
import {createBrowserRouter} from "react-router-dom";
import AllProductsView from "../views/AllProductsView.jsx";
import EditProductView from "../views/EditProductView.jsx";

export const PRODUCTS_VIEW_PATH = "/products";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: PRODUCTS_VIEW_PATH,
                element: <AllProductsView/>,
            },
            {
                path: "/home",
                element: <div><h1>Home</h1></div>,
            },
            {
                path: "/product/:productId/edit",
                element: <EditProductView/>,
            },
        ],
    },

]);


export default router;