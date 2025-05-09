import { useNavigate } from "react-router-dom";

export default function ProductCard({ title, image, id }) {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/products/${id}`)}
            className="group flex flex-col justify-between rounded-xl border border-gray-200 cursor-pointer shadow-md hover:shadow-lg overflow-hidden transition-all duration-300 hover:border-gray-300 bg-white">
            <div className="relative w-full aspect-square overflow-hidden">
                <img
                    className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                    src={image}
                    alt={title} />
            </div>

            <div className="p-4 pt-0 border-t border-gray-100 group-hover:border-gray-200 transition-colors">
                <h2 className="text-lg font-medium text-gray-800 line-clamp-1 leading-tight">
                    {title}
                </h2>
            </div>
        </div>
    );
}