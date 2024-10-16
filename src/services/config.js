import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export const apiClient = axios.create({ // export is added because apiClient will not be returned on this particular page but somewhere else...
    baseURL: baseURL // API link from the backend...
})

