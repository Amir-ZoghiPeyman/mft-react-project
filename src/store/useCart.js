import { create } from "zustand";

const useCart = create((set) => {
    const prevCart = JSON.parse(localStorage.getItem("cart")) || [];
    return {
        products: prevCart,

        addProduct: (product) => set((prev) => {
            const foundItemIndex = prev.products.findIndex((item) => item.id === product.id);

            if (foundItemIndex !== -1) {
                const newProducts = prev.products.map((item, index) =>
                    index === foundItemIndex
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
                localStorage.setItem("cart", JSON.stringify(newProducts));
                return { products: newProducts };
            }

            const newProduct = {
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: 1
            };

            const newProducts = [...prev.products, newProduct];
            localStorage.setItem("cart", JSON.stringify(newProducts));
            return { products: newProducts };
        }),

        reduceProduct: (id) => set((prev) => {
            const foundItemIndex = prev.products.findIndex((item) => item.id === id);
            if (foundItemIndex === -1) return prev;

            const newProducts = prev.products
                .map((item, index) =>
                    index === foundItemIndex
                        ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
                        : item
                )
                .filter(item => item.quantity > 0);

            localStorage.setItem("cart", JSON.stringify(newProducts));
            return { products: newProducts };
        }),

        removeProduct: (id) => set((prev) => {
            const newProducts = prev.products.filter(item => item.id !== id);
            localStorage.setItem("cart", JSON.stringify(newProducts));
            return { products: newProducts };
        }),
        clearCart: () => set(() => {
            localStorage.setItem("cart", JSON.stringify([]));
            return { products: [] };
        })
    }
});

export default useCart;