import { useQuery } from "@tanstack/react-query";
import api from "../api/api"

export default function useFetchSingleProduct(productId) {
    async function queryFn() {
        return await api.get(`products/${productId}`)
    }

    return useQuery({
        queryFn,
        queryKey: [`singleProduct${productId}`],
        retry: 4,
    })
}