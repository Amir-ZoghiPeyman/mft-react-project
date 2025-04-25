import { useParams } from "react-router-dom"
import { useMemo } from "react";
import useFetchSingleProduct from "../../requests/useFetchSingleProduct"
import useCart from "../../store/useCart";
import Button from '@mui/material/Button';

export default function SingleProductPage() {

    const { productId } = useParams();
    const { data } = useFetchSingleProduct(productId);
    const { products, addProduct, deleteProduct } = useCart();

    const productCount = useMemo(() => {
        const foundIndex = products.findIndex((item) => item.id === productId);
        if (foundIndex == -1) {
            return 0;
        } else {
            return products[foundIndex].quantity;
        }
    }, [products]);

    return (
        <div className="flex">
            <img src={data?.data?.image} className="flex w-md p-6 round object-contain aspect-square rounded-4xl border-2 border-black shadow-2xl m-10" alt="" />
            <div className="flex flex-col justify-center">
                <h1>{data?.data.title}</h1>
                <div className="mx-2 mt-4">
                    <Button onClick={() => addProduct(productId)} variant="contained" color="success">
                        +
                    </Button>
                    <span className="mx-4">{productCount}</span>
                    <Button onClick={() => deleteProduct(productId)} variant="outlined" color="error">
                        -
                    </Button>
                </div>
            </div>
        </div>
    );
}