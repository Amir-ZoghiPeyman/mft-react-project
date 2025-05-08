import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton } from '@mui/material';
import useCart from '../../store/useCart';

export default function Cart() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const { products, addProduct, reduceProduct, removeProduct, clearCart } = useCart();
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const total = products.reduce(
            (sum, item) => sum + (item.price * item.quantity),
            0
        );
        setTotalPrice(total.toFixed(2));
    }, [products]);

    if (products.length === 0) {
        return (
            <div className="min-h-screen p-8 text-center flex flex-col items-center justify-center">
                <div className="max-w-md mx-auto">
                    <div className="text-8xl mb-4 text-gray-300">🛒</div>
                    <h2 className="text-3xl font-bold text-gray-700 mb-4">Your Cart Is Empty</h2>
                    <Button
                        onClick={() => navigate('/')}
                        variant="contained"
                        className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-full 
                                   uppercase font-bold transition-all shadow-lg hover:shadow-xl"
                    >
                        Start Shopping
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen p-8 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">Shopping Cart</h1>

            <div className="space-y-4">
                {products.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center bg-white p-4 rounded-xl shadow-sm hover:shadow-md
                                 transition-shadow duration-200 border border-gray-100"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-32 h-32 object-contain rounded-lg cursor-pointer 
                                      hover:transform hover:scale-105 transition-transform duration-200"
                            onClick={() => navigate(`/products/${item.id}`)}
                        />

                        <div className="ml-6 flex-1">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <p className="text-lg font-medium text-blue-600 w-24">
                                        ${item.price.toFixed(2)}
                                    </p>

                                    <div className="flex items-center gap-10">
                                        <div className="w-8 h-8 relative">
                                            {item.quantity === 1 ? (
                                                <IconButton
                                                    onClick={() => removeProduct(item.id)}
                                                    className="text-red-500 hover:bg-red-50 w-full h-full"
                                                >
                                                    <DeleteIcon fontSize="small" />
                                                </IconButton>
                                            ) : (
                                                <Button
                                                    variant="outlined"
                                                    className="min-w-0 w-full h-full rounded-full p-0"
                                                    onClick={() => reduceProduct(item.id)}
                                                >
                                                    -
                                                </Button>
                                            )}
                                        </div>

                                        <span className="text-xl font-medium text-gray-700 w-2 text-center font-mono px-2">
                                            {item.quantity.toString().padStart(2, '0')}
                                        </span>

                                        <Button
                                            variant="contained"
                                            className="min-w-0 w-8 h-8 rounded-full p-0 bg-blue-600 hover:bg-blue-700 ml-2"
                                            onClick={() => addProduct(item)}
                                        >
                                            +
                                        </Button>
                                    </div>
                                </div>

                                <div className="w-24 text-right">
                                    <span className="text-xl font-medium text-gray-700 font-mono">
                                        ${(item.price * item.quantity).toFixed(2).padStart(6, ' ')}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-lg">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-gray-600">Total Items</p>
                        <h3 className="text-2xl font-bold text-gray-800">
                            {products.reduce((sum, item) => sum + item.quantity, 0)}
                        </h3>
                    </div>

                    <div className="text-center md:text-left">
                        <p className="text-gray-600">Total Amount</p>
                        <h2 className="text-3xl font-bold text-blue-600">${totalPrice}</h2>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Button
                            onClick={clearCart}
                            variant="outlined"
                            className="w-full sm:w-auto py-3 px-8 text-red-500 border-red-200
                                     hover:border-red-300 hover:bg-red-50 rounded-full
                                     transition-all duration-200"
                        >
                            Clear Cart
                        </Button>
                        <Button
                            variant="contained"
                            className="w-full sm:w-auto py-3 px-8 bg-blue-600 hover:bg-blue-700
                                     text-white rounded-full shadow-lg hover:shadow-xl"
                            onClick={() => navigate('/checkout')}
                        >
                            Checkout Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}