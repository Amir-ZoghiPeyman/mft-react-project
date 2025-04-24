import { useParams } from "react-router-dom"
import { useMemo } from "react";
import useFetchSingleProduct from "../../requests/useFetchSingleProduct"
import useCart from "../../store/useCart";

export default function SingleProductPage() {

    const { productId } = useParams();
    const { data } = useFetchSingleProduct(productId);
    const { products, addProduct } = useCart();

    const productCount = useMemo(() => {
        const foundIndex = products.findIndex((item) => item.id === productId);
        if (foundIndex == -1) {
            return 0;
        } else {
            return products[foundIndex].quantity;
        }
    }, [products]);

    return (
        <div>
            <img src={data?.data?.image} alt="" />
            <h1>{data?.data.title}</h1>

            <button onClick={() => addProduct(productId)}>+</button>
            <span>{productCount}</span>
            <button>-</button>
        </div>
    );
}