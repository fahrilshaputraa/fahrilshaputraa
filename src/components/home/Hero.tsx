export default function Hero() {
    return (
        <section className="pt-32 pb-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <div className="float-animation mb-4">
                    <span className="text-5xl">👋</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" data-aos="fade-up" data-aos-delay="100">
                    Web Developer & Web Designer
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                    Saya membantu bisnis dan individu menciptakan presence online yang memukau melalui desain website yang modern dan fungsional.
                </p>
                <div className="flex justify-center gap-4" data-aos="fade-up" data-aos-delay="300">
                    <a href="#contact" className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition">
                    Hubungi Saya
                    </a>
                    <a href="#project" className="px-8 py-3 border border-gray-300 rounded-full font-medium hover:border-blue-600 hover:text-blue-600 transition">
                    Lihat Portfolio
                    </a>
                </div>
            </div>
        </section>
    )
}