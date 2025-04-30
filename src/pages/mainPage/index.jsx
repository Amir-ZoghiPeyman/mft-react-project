import CircularProgress from '@mui/material/CircularProgress';
import Hero from '../../components/hero';
import ProductCard from "../../components/productCard";
import useFetchData from "../../requests/useFetchData";

export default function MainPage() {
    const { data: products, isLoading, error, isError } = useFetchData();

    if (isLoading) return (
        <div className="flex justify-center items-center min-h-[60vh]">
            <CircularProgress />
        </div>
    );

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
            <Hero />
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 p-10 mt-10">
                {products?.data?.map((item) => (
                    <ProductCard
                        title={item.title}
                        image={item.image}
                        key={item.id}
                        id={item.id}
                    />
                ))}
            </div>
        </>
    );
}