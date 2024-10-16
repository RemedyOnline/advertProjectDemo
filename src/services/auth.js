import { apiClient } from "./config"

export const apiSignup = async (payLoad) => {
    return apiClient.post("/users/signup", payLoad); // payLoad means the data being sent during a post request...
}

export const apiLogin = async (payLoad) =>
    apiClient.post("/users/login", payLoad)