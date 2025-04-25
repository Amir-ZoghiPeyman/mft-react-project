import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="w-full max-w-md">
                        <form className="flex">
                            <input
                                className="flex-1 border border-r-0 border-gray-300 rounded-l-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                type="text"
                                placeholder="Search products..."
                            />
                            <button
                                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-r-full border border-blue-600 transition-colors duration-200"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    </div>

                    <div className="flex items-center space-x-6">
                        <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                            <AccountCircleOutlinedIcon fontSize="medium" />
                        </button>
                        <button className="p-2 text-gray-700 hover:text-red-500 transition-colors duration-200">
                            <FavoriteBorderOutlinedIcon fontSize="medium" />
                        </button>
                        <button className="p-2 text-gray-700 hover:text-green-600 transition-colors duration-200 relative">
                            <ShoppingCartOutlinedIcon fontSize="medium" />
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                0
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="border-b border-gray-200"></div>
        </header>
    )
}