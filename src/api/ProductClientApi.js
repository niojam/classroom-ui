import axios from "axios";


const ProductClient = {
    getAllProducts() {
        return axios.get("/api/product")
    },
    getProductById(id) {
        return axios.get(`/api/product/${id}`)
    },
    updateProduct(product) {
        return axios.put(`/api/product/${product.id}`, product)
    },
    deleteProduct(id) {
        return axios.delete(`/api/product/${id}`)
    }
}

export {ProductClient}
