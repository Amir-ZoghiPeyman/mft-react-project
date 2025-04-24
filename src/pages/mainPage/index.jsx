import ProductCard from "../../components/productCard";
import useFetchData from "../../requests/useFetchData";

export default function MainPage() {

    const { data: products, isLoading, error, isError } = useFetchData();

    if (isLoading) return <h1>LOADING...</h1>;
    if (isError) return <h1>an error has been accrued: {error.message}</h1>;

    return (
        <div className="grid grid-cols-4 gap-3 rounded-2xl shadow-4xl w-full p-2">
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