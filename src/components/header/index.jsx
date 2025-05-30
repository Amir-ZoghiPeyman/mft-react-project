import { useNavigate } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import useCart from '../../store/useCart';

export default function Header() {
    const navigate = useNavigate()
    const { products } = useCart();

    return (
        <header className="sticky top-0 z-50 bg-white shadow-lg">
            <div className="container mx-auto px-4 sm:px-6 pt-4 sm:py-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">

                    <div className="w-full max-w-md order-2 sm:order-1">
                        <form className="hidden md:flex">
                            <input
                                className="flex-1 border border-r-0 border-gray-300 rounded-l-full py-2 px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                type="text"
                                placeholder="Search products..." />
                            <button
                                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 sm:px-6 rounded-r-full border border-blue-600 transition-colors duration-200 text-sm sm:text-base"
                                type="submit">
                                <span className="hidden sm:inline">Search</span>
                            </button>
                        </form>
                    </div>

                    <div className="flex items-center justify-between w-full sm:w-auto order-1 sm:order-2">
                        <div className="flex items-center space-x-4 sm:space-x-6">
                            <button
                                onClick={() => navigate("/")}
                                className="p-2 text-gray-700 hover:text-yellow-600 transition-colors duration-200">
                                <HomeOutlinedIcon fontSize="medium" />
                            </button>
                            <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                                <AccountCircleOutlinedIcon fontSize="medium" />
                            </button>
                            <button className="p-2 text-gray-700 hover:text-red-500 transition-colors duration-200">
                                <FavoriteBorderOutlinedIcon fontSize="medium" />
                            </button>
                            <button
                                onClick={() => navigate("/cart")}
                                className="p-2 text-gray-700 hover:text-green-600 transition-colors duration-200 relative">
                                <ShoppingCartOutlinedIcon fontSize="medium" />
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    {products?.length || 0}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-b border-gray-200"></div>
        </header>
    )
}