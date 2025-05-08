import { useParams } from "react-router-dom";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import useFetchSingleProduct from "../../requests/useFetchSingleProduct";
import useCart from "../../store/useCart";

export default function SingleProduct() {
    const navigate = useNavigate();
    const { productId } = useParams();
    const { data, isLoading, error } = useFetchSingleProduct(productId);
    const { products, addProduct, deleteProduct } = useCart();

    const productCount = useMemo(() => {
        const foundIndex = products.findIndex((item) => item.id === productId);
        return foundIndex === -1 ? 0 : products[foundIndex].quantity;
    }, [products, productId]);

    if (isLoading) return (
        <div className="flex justify-center items-center h-screen">
            <CircularProgress />
        </div>
    );

    if (error) return (
        <div className="flex justify-center items-center h-screen text-red-500">
            Error loading product
        </div>
    );
    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-8">
                <button
                    onClick={() => navigate("/")}
                    className="flex items-center gap-2 mb-6 text-gray-600 hover:text-gray-900 transition-colors"
                >
                    <ArrowBackIcon /> Back to products
                </button>

                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1 bg-white rounded-xl shadow-md overflow-hidden">
                        <img
                            src={data?.data?.image}
                            className="w-full h-auto max-h-[500px] object-contain p-8"
                            alt={data?.data?.title}
                            loading="lazy"
                        />
                    </div>

                    <div className="flex-1 flex flex-col justify-center">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            {data?.data?.title}
                        </h1>
                        <p className="text-gray-600 mb-4">
                            {data?.data?.description}
                        </p>
                        <p className="font-bold mb-4">
                            {data?.data?.rating.rate} <StarIcon className="text-yellow-600" /> • <span className="text-gray-600">{data?.data?.rating.count}</span>
                        </p>
                        <p className="font-bold mb-4">
                            ${data?.data?.price}
                        </p>

                        <div className="flex items-center gap-6 mt-8">
                            <div className="flex items-center gap-4">
                                <Button
                                    onClick={() => deleteProduct(productId)}
                                    variant="outlined"
                                    color="error"
                                    size="large"
                                    disabled={productCount === 0}
                                >
                                    -
                                </Button>
                                <span className="text-xl font-medium w-8 text-center">
                                    {productCount}
                                </span>
                                <Button
                                    onClick={() => addProduct(productId)}
                                    variant="contained"
                                    color="success"
                                    size="large"
                                >
                                    +
                                </Button>
                            </div>

                            {productCount > 0 && (
                                <span className="text-green-600 font-medium">
                                    In cart
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}