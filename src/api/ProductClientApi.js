import axios from "axios";


const ProductClient = {
    getAllProducts() {
        return axios.get("/api/product/")
    }
}

export {ProductClient}
