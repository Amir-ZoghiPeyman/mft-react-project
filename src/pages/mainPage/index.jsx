import ProductCard from "../../components/productCard";
import useFetchData from "../../requests/useFetchData";
import CircularProgress from '@mui/material/CircularProgress';

export default function MainPage() {

    const { data: products, isLoading, error, isError } = useFetchData();

    if (isLoading) return <h1 className="flex justify-center mt-40"><CircularProgress /></h1>;
    if (isError) return <h1 className="flex justify-center mt-40">an error has been accrued: {error.message}</h1>;

    return (
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
    )
}