import { apiClient } from "./config";

export const apiGetProducts = async () =>
    apiClient.get("/products");

export const apiGetOneProduct = async (slug) => {
    return apiClient.get(`/products/${slug}`)
}

export const apiAddProduct = async (payLoad) => 
    apiClient.post("/products", payLoad);




