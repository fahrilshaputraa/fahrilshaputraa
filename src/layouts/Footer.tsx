export default function Footer() {
    return (
    <footer className="bg-gray-900 text-gray-400 py-20">
        <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* <!-- Brand Section --> */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">Fahrilshaputra</h2>
                    <p className="text-gray-400">Membangun pengalaman digital yang membuat perbedaan</p>
                    <div className="flex space-x-4">
                        <a href="https://instagram.com/fahrilshaputraa" className="text-gray-400 hover:text-white transition-colors duration-300">
                            <i className="fab fa-instagram text-xl"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/fahrilshaputra/" className="text-gray-400 hover:text-white transition-colors duration-300">
                            <i className="fab fa-linkedin-in text-xl"></i>
                        </a>
                        <a href="https://github.com/fahrilshaputraa" className="text-gray-400 hover:text-white transition-colors duration-300">
                            <i className="fab fa-github text-xl"></i>
                        </a>
                    </div>
                </div>

                {/* <!-- Quick Links --> */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#about" className="hover:text-white transition-colors duration-300">About</a></li>
                        <li><a href="#project" className="hover:text-white transition-colors duration-300">Projects</a></li>
                        <li><a href="#post" className="hover:text-white transition-colors duration-300">Blog</a></li>
                        <li><a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a></li>
                    </ul>
                </div>

                {/* <!-- Services --> */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Services</h3>
                    <ul className="space-y-2">
                        <li className="hover:text-white transition-colors duration-300">Web Development</li>
                        <li className="hover:text-white transition-colors duration-300">UI/UX Design</li>
                        <li className="hover:text-white transition-colors duration-300">Joki Website</li>
                        <li className="hover:text-white transition-colors duration-300">Consulting</li>
                    </ul>
                </div>

                {/* <!-- Contact Info --> */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Contact</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center space-x-3">
                            <i className="fas fa-envelope"></i>
                            <span>fahrilshaputra@gmail.com</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <i className="fas fa-phone"></i>
                            <span>+62 123 456 789</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Bandung , Indonesia</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* <!-- Bottom Bar --> */}
            <div className="border-t border-gray-800 mt-12 pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm">©2024 Fahrilshaputra. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-sm hover:text-white transition-colors duration-300">Privacy Policy</a>
                        <a href="#" className="text-sm hover:text-white transition-colors duration-300">Terms of Service</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}