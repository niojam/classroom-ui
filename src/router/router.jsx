import App from "../App.jsx";
import {createBrowserRouter} from "react-router-dom";
import AllProductsView from "../views/AllProductsView.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/products",
                element: <AllProductsView/>,
            },
            {
                path: "/home",
                element: <div><h1>Home</h1></div>,
            },
        ],
    },

]);


export default router;