import Hero from '../../components/hero';
import Feature_01 from '../../components/feature_01';
import Section_01 from '../../components/section_01';
import ProductsList from '../../components/productsList';
import Blog_01 from '../../components/blog_01';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function MainPage() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <Hero />
            <Section_01 />
            <Feature_01 />
            <ProductsList />
            <Blog_01 />
        </>
    );
}