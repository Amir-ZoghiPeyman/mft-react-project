import axios from "axios"

const api = axios.create({
    baseURL: 'https://fakestoreapi.com',
    headers: {
        Accept: "application/JSON",
        "Content-Type": "application/JSON"
    }
})

export default api;