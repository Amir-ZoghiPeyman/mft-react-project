import { create } from "zustand";

const useCart = create((set) => {
    let initialCart = [];
    try {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            const parsed = JSON.parse(storedCart);
            initialCart = Array.isArray(parsed) ? parsed : [];
        }
    } catch (error) {
        console.error("Failed to parse cart from localStorage:", error);
        initialCart = [];
    }

    return {
        products: initialCart,
        addProduct: (id) =>
            set((prev) => {
                const currentProducts = Array.isArray(prev.products) ? prev.products : [];
                const foundItemIndex = currentProducts.findIndex((item) => item.id === id);

                if (foundItemIndex !== -1) {
                    const newProducts = currentProducts.map((item, index) =>
                        index === foundItemIndex ? { ...item, quantity: item.quantity + 1 } : item
                    );

                    localStorage.setItem("cart", JSON.stringify(newProducts));
                    return { products: newProducts };
                }

                const newProducts = [...currentProducts, { id, quantity: 1 }];
                localStorage.setItem("cart", JSON.stringify(newProducts));
                return { products: newProducts };
            }),
        deleteProduct: (id) =>
            set((prev) => {
                const currentProducts = Array.isArray(prev.products) ? prev.products : [];
                const foundItemIndex = currentProducts.findIndex((item) => item.id === id);

                if (foundItemIndex === -1) return prev;

                const updatedProducts = currentProducts
                    .map((item, index) =>
                        index === foundItemIndex
                            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
                            : item
                    )
                    .filter(item => item.quantity > 0);

                localStorage.setItem("cart", JSON.stringify(updatedProducts));
                return { products: updatedProducts };
            })
    };
});

export default useCart;