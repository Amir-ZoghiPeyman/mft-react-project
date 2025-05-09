import { useQuery } from "@tanstack/react-query";
import api from "../api/api";

export default function useFetchData() {
    async function queryFn() {
        const result = await api.get("products")
        return result;
    }

    return useQuery({
        queryFn,
        queryKey: ["allProducts"],
        retry: 4,
    })
}