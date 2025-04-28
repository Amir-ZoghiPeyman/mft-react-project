import { Link } from "react-router-dom";

export default function NoMatch() {
    return (
        <>
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
                <div className="max-w-lg w-full text-center">
                    <div className="flex flex-col items-center">
                        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                            Oops! Page not found
                        </h2>
                        <p className="text-gray-600 mb-8">
                            The page you're looking for might have been removed, had its name changed,
                            or is temporarily unavailable.
                        </p>
                        <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                            Return Home
                        </Link>
                    </div>
                    <div className="mt-12 flex justify-center space-x-6">
                        <div className="w-8 h-8 bg-gray-200 rounded-full animate-bounce"></div>
                        <div className="w-8 h-8 bg-gray-200 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-8 h-8 bg-gray-200 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                </div>
            </div>
        </>
    )
}