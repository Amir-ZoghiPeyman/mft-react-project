import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SingleProduct from "../../components/singleProduct";

export default function SingleProductPage() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <SingleProduct />
    )
}