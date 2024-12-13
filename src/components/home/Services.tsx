export default function Services() {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-2 text-center" data-aos="fade-up">Services</h2>
                <p className="text-gray-600 text-lg w-2/3 mx-auto text-center mb-10" data-aos="fade-up" data-aos-delay="100">
                    Saya menyediakan layanan yang komprehensif untuk membantu bisnis dan individu menciptakan presence online yang memukau.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Paket 1 */}
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300" data-aos="fade-up" data-aos-delay="200">
                        <h3 className="text-xl font-semibold text-gray-800">HTML & CSS & JavaScript</h3>
                        <p className="text-gray-500 text-sm mb-4">Membuat website dengan HTML, CSS, dan JavaScript</p>
                        <div className="mb-6">
                            <p className="text-gray-400">Mulai dari</p>
                            <p className="text-3xl font-bold text-blue-600">Rp 100.000</p>
                            <p className="text-gray-500 text-sm">Harga disesuaikan dengan kebutuhan dan kompleksitas website.</p>
                        </div>
                        <ul className="text-gray-600 space-y-2 mb-6">
                            <li>✅ Hanya HTML & CSS & JS</li>
                            <li>✅ 100% Responsive</li>
                            <li>✅ Template Custom</li>
                            <li>✅ SEO Optimized</li>
                            <li>✅ Custom Framework CSS</li>
                            <li>✅ 1x Revisi desain</li>
                            <li>✅ Penggunaan animasi (efek halus)</li>
                        </ul>
                        <button className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700" data-aos="fade-up" data-aos-delay="300"><i className="fa-brands fa-whatsapp"></i> Tanya Sekarang</button>
                        <p className="text-gray-500 text-sm mt-4 italic" data-aos="fade-up" data-aos-delay="400"><span className="font-bold">Note:</span> Layanan ini dikerjakan oleh tim ahli yang berpengalaman. Kami memastikan kualitas terbaik dan hasil yang memuaskan untuk bisnis Anda.</p>
                    </div>
                    {/* Paket 2 */}
                    <div className="bg-white rounded-lg shadow-md p-6 border-2 border-blue-500 hover:shadow-lg transition duration-300" data-aos="fade-up" data-aos-delay="300">
                        <h3 className="text-xl font-semibold text-gray-800">Custom Website</h3>
                        <p className="text-gray-500 text-sm mb-4">Website kustom dengan HTML, CSS, dan backend dasar sesuai kebutuhan Anda</p>
                        <div className="mb-6">
                            <p className="text-gray-400">Mulai dari</p>
                            <p className="text-3xl font-bold text-blue-600">Rp 1.500.000</p>
                            <p className="text-gray-500 text-sm">Harga dapat berubah tergantung pada tingkat kesulitan dan fitur tambahan.</p>
                        </div>
                        <ul className="text-gray-600 space-y-2 mb-6">
                            <li>✅ Backend PHP, Python, Node.js, atau lainnya</li>
                            <li>✅ Desain custom (HTML, CSS, JS)</li>
                            <li>✅ 100% Responsive</li>
                            <li>✅ SEO Optimized</li>
                            <li>✅ 1x Revisi desain</li>
                            <li>✅ 2 minggu maintenance dan support</li>
                        </ul>
                        <button className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700" data-aos="fade-up" data-aos-delay="400"><i className="fa-brands fa-whatsapp"></i> Tanya Sekarang</button>
                        <p className="text-gray-500 text-sm mt-4 italic" data-aos="fade-up" data-aos-delay="500"><span className="font-bold">Note:</span> Layanan ini dikerjakan oleh tim ahli yang berpengalaman. Kami memastikan kualitas terbaik dan hasil yang memuaskan untuk bisnis Anda.</p>
                    </div>
                    
                    {/* Paket 3 */}
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300" data-aos="fade-up" data-aos-delay="400">
                        <h3 className="text-xl font-semibold text-gray-800">Lainnya</h3>
                        <p className="text-gray-500 text-sm mb-4">Paket untuk joki website, desain website, dan lainnya.</p>
                        <div className="mb-6">
                            <p className="text-gray-400">Mulai dari</p>
                            <p className="text-3xl font-bold text-blue-600">Disesuaikan</p>
                            <p className="text-gray-500 text-sm">Berikut adalah layanan yang tersedia</p>
                        </div>
                        <ul className="text-gray-600 space-y-2 mb-6">
                            <li>✅ Desain Website (Figma)</li>
                            <li>✅ Pembuatan ERD (Entity-Relationship Diagram)</li>
                            <li>✅ Pembuatan Flowchart Sistem</li>
                            <li>✅ Pengembangan Sistem & Integrasi API</li>
                            <li>✅ Joki Website Tugas Akhir, dll</li>
                            <li>✅ Dan Lain-Lain</li>
                        </ul>
                        <button className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700" data-aos="fade-up" data-aos-delay="500"><i className="fa-brands fa-whatsapp"></i> Tanya Sekarang</button>
                        <p className="text-gray-500 text-sm mt-4 italic" data-aos="fade-up" data-aos-delay="600"><span className="font-bold">Note:</span> Layanan ini dikerjakan oleh tim ahli yang berpengalaman. Kami memastikan kualitas terbaik dan hasil yang memuaskan untuk bisnis Anda.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}