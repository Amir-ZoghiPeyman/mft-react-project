import { useState } from "react"
import { useEffect } from "react"
import api from "../../api/api";
import ProductCard from "../../components/productCard";

export default function MainPage() {
    const [state, setState] = useState([]);
    useEffect(() => {
        async function fetchFn() {
            const res = await api.get("/products")
            setState(res)
        }
        fetchFn();
    }, [])

    return (
        <div className="grid grid-cols-4 gap-3 rounded-2xl shadow-4xl w-full p-2">
            {state.map((item) => (
                <ProductCard
                    title={item.title}
                    image={item.image}
                    id={item.id}
                />
            ))}
        </div>
    )
}