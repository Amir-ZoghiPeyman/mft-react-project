import axios from "axios"

const api = axios.create({
    baseURL: 'https://fakestoreapi.com',
    headers: {
        Accept: "application/JSON",
        "Content-Type": "application/JSON"
    }
})

api.interceptors.request.use(req => req)

api.interceptors.response.use(res => res)

export default api;