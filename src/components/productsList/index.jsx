import { Button } from '@mui/material';
import { useState } from 'react';
import useFetchData from "../../requests/useFetchData";
import ProductCard from "../productCard";

const ProductSkeleton = () => (
    <div className="animate-pulse space-y-4">
        <div className="bg-gray-200 h-64 rounded-lg"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
);

export default function ProductsList() {
    const { data: products, isLoading, error, isError } = useFetchData();
    const [visibleProducts, setVisibleProducts] = useState(4);

    const showMoreProducts = () => {
        setVisibleProducts(products?.data?.length || 0);
    };

    if (isError) return (
        <div className="flex flex-col justify-center items-center min-h-[60vh] p-4 text-center">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md w-full">
                <h1 className="text-xl font-semibold text-red-700 mb-2">Error Loading Products</h1>
                <p className="text-red-600 mb-4">An error occurred while fetching data.</p>
                <p className="text-sm text-red-500 bg-red-100 px-3 py-2 rounded">
                    {error.message || 'Unknown error'}
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
                    Retry
                </button>
            </div>
        </div>
    );

    return (
        <>
            <div className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
                <hr className="border-2 border-blue-600 w-20 mx-auto" />
                <h3 className="text-center text-3xl font-bold mt-4">Featured Products</h3>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 p-10 mt-4 lg:mx-20 md:mx-20">
                {isLoading ? (
                    [...Array(4)].map((_, i) => <ProductSkeleton key={i} />)
                ) : (
                    products?.data?.slice(0, visibleProducts)?.map((item) => (
                        <ProductCard
                            title={item.title}
                            image={item.image}
                            key={item.id}
                            id={item.id}
                        />
                    ))
                )}
            </div>

            {!isLoading && products?.data?.length > 4 && visibleProducts === 4 && (
                <div className="flex justify-center mt-8 mb-12">
                    <Button
                        onClick={showMoreProducts}
                        variant="contained"
                        className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-none uppercase font-bold transition-all">
                        Show More
                    </Button>
                </div>
            )}
        </>
    )
}