import { useParams } from "react-router-dom"
import useFetchSingleProduct from "../../requests/useFetchSingleProduct"

export default function SingleProductPage() {
    const { productId } = useParams();

    const { data } = useFetchSingleProduct(productId);

    return (
        <>
            <div>
                <img src={data?.data?.image} alt="" />
                <h2>{data?.data?.title}</h2>
            </div>
        </>
    )
}