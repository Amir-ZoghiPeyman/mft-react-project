export default function ProductCard({ title, image, id }) {
    return (
        <div className="flex flex-col justify-center items-center ">
            <img className="object-cover w-full aspect-square" src={image} alt="" />
            <h2 className="line-clamp-1 ">{title}</h2>
        </div>
    )
}