import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AddCallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white mb-4">Navigations</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                'Sell online',
                                'Mobile commerce',
                                'Point of sale',
                                'Features',
                                'Website dev',
                                'Dropshipping',
                                'Hardware',
                                'Shopping cart',
                                'Software'
                            ].map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="text-sm hover:text-blue-400 transition-colors"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <AddLocationAltIcon className="text-blue-400 mt-1 flex-shrink-0" />
                                <p className="text-sm">
                                    203 Fake St. Mountain View<br />
                                    San Francisco, California, USA
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <AddCallIcon className="text-blue-400" />
                                <a href="tel:+23923929210" className="text-sm hover:text-blue-400 transition-colors">
                                    +2 392 3929 210
                                </a>
                            </div>
                            <div className="flex items-center gap-4">
                                <EmailIcon className="text-blue-400" />
                                <a href="mailto:emailaddress@domain.com" className="text-sm hover:text-blue-400 transition-colors">
                                    emailaddress@domain.com
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white mb-4">About Us</h4>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptates dignissimos cumque doloremque.
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                    <p className="text-sm text-gray-500">
                        Copyright ©2025 All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}