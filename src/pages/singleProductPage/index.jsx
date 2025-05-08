import SingleProduct from "../../components/singleProduct";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SingleProductPage() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <SingleProduct />
    );
}