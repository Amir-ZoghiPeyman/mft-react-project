import { useNavigate } from "react-router-dom"

export default function ProductCard({ title, image, id }) {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/products/${id}`)} className="flex flex-col justify-center items-center cursor-pointer ">
            <img className="object-contain w-full aspect-square" src={image} alt="" />
            <h2 className="line-clamp-1 ">{title}</h2>
        </div>
    )
}