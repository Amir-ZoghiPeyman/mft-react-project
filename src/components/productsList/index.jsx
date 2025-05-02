import useFetchData from "../../requests/useFetchData"
import ProductCard from "..//productCard"

export default function ProductsList() {
    const { data: products } = useFetchData();

    return (
        <>
            <div className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
                <hr className="border-2 border-blue-600 w-20 mx-auto" />
                <h3 className="text-center text-3xl font-bold mt-4">Featured Products</h3>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 p-10 mt-4 mx-20">
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
    )
}