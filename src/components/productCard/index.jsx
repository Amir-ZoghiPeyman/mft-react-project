import { useNavigate } from "react-router-dom"

export default function ProductCard({ title, image, id }) {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/products/${id}`)} className="flex flex-col justify-center items-center rounded-4xl border-2 border-black cursor-pointer shadow-2xl hover:bg-gray-200 transition-all">
            <img className="p-6 round object-contain w-full aspect-square" src={image} alt="" />
            <h2 className="m-4 line-clamp-1 ">{title}</h2>
        </div>
    )
}