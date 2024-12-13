export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl font-bold mb-2">Senang mendengar dari Anda,</h2>
                    <h2 className="text-3xl font-bold flex items-center justify-center">
                    Hubungi Saya <span className="ml-2 wave-animation">👋</span>
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto">
                    <form className="space-y-6">
                        {/* <!-- Two column grid for form fields --> */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* <!-- Name --> */}
                            <div data-aos="fade-up" data-aos-delay="100">
                            <label className="block text-sm text-gray-600 mb-1">Nama Anda</label>
                            <input 
                                type="text" 
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-300"
                                placeholder="Nama Anda"
                            />
                            </div>

                            {/* <!-- Email --> */}
                            <div data-aos="fade-up" data-aos-delay="200">
                            <label className="block text-sm text-gray-600 mb-1">Email Anda</label>
                            <input 
                                type="email" 
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-300"
                                placeholder="example@example.com"
                            />
                            </div>

                            {/* <!-- Interest --> */}
                            <div data-aos="fade-up" data-aos-delay="300">
                            <label className="block text-sm text-gray-600 mb-1">Minat Anda</label>
                            <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-300 appearance-none">
                                <option>Desain & Branding</option>
                                <option>Pengembangan Web</option>
                                <option>Joki Website</option>
                                <option>Lainnya</option>
                            </select>
                            </div>

                            {/* <!-- Budget --> */}
                            <div data-aos="fade-up" data-aos-delay="400">
                            <label className="block text-sm text-gray-600 mb-1">Anggaran Proyek</label>
                            <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-300 appearance-none">
                                <option>Pilih anggaran Anda</option>
                                <option>Rp 100.000 - Rp 1.000.000</option>
                                <option>Rp 1.000.000 - Rp 5.000.000</option>
                                <option>Rp 5.000.000+</option>
                            </select>
                            </div>
                        </div>

                        {/* <!-- Message - Full width --> */}
                        <div data-aos="fade-up" data-aos-delay="500">
                            <label className="block text-sm text-gray-600 mb-1">Pesan</label>
                            <textarea 
                            rows={4} 
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-300"
                            placeholder="Ceritakan kepada kami tentang proyek Anda"
                            ></textarea>
                        </div>

                        {/* <!-- Submit Button --> */}
                        <button data-aos="fade-up" data-aos-delay="600" 
                            className="w-full bg-black text-white py-4 rounded-lg font-medium hover:bg-gray-800 transition flex items-center justify-center">
                            Kirim Saja <i className="fas fa-arrow-right ml-2"></i>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}