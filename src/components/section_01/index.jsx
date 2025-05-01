import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import UpdateIcon from '@mui/icons-material/Update';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export default function Section_01() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                <div className="flex items-start p-6 rounded-xl bg-white hover:shadow-lg transition-all duration-300 group">
                    <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                            <LocalShippingIcon className="text-blue-600 w-8 h-8" />
                        </div>
                    </div>
                    <div className="ml-4">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Shipping</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam.
                        </p>
                    </div>
                </div>

                <div className="flex items-start p-6 rounded-xl bg-white hover:shadow-lg transition-all duration-300 group">
                    <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                            <UpdateIcon className="text-blue-600 w-8 h-8" />
                        </div>
                    </div>
                    <div className="ml-4">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Returns</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam.
                        </p>
                    </div>
                </div>

                <div className="flex items-start p-6 rounded-xl bg-white hover:shadow-lg transition-all duration-300 group">
                    <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center">
                            <HelpOutlineIcon className="text-blue-600 w-8 h-8" />
                        </div>
                    </div>
                    <div className="ml-4">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Support</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}