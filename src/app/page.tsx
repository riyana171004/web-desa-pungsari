import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-10 text-center">
      
      {/* Carousel Batik dengan Overlay Teks */}
      <div className="w-full mb-8 relative rounded-xl overflow-hidden shadow-lg">
        <img src="/assets/batik.jpg" alt="Batik Desa Pungsari" className="w-full h-80 md:h-[32rem] object-cover object-center brightness-75" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="block text-2xl md:text-4xl font-bold text-white drop-shadow-lg mb-2">Website Resmi Kepala Desa Pungsari</span>
          <span className="block text-base md:text-lg font-medium text-white drop-shadow">Sumber informasi terbaru tentang pemerintahan di Desa Pungsari</span>
        </div>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Selamat Datang di Kantor Kepala Desa Pungsari</h1>
      <p className="text-base md:text-lg text-gray-700 max-w-2xl mb-6">
        Website resmi Kantor Kepala Desa Pungsari. Temukan informasi seputar profil desa, pelayanan masyarakat, dan kontak layanan kami. Kami berkomitmen memberikan pelayanan terbaik untuk masyarakat Pungsari.
      </p>
      <div className="w-full max-w-xl rounded-lg shadow bg-white/80 p-6 mt-4">
        <h2 className="text-xl font-semibold mb-2 text-blue-800">Sambutan Kepala Desa</h2>
        <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-inner text-left font-serif relative">
          <p className="italic text-gray-700 mb-4 text-base md:text-lg">Assalamu’alaikum warahmatullahi wabarakatuh,</p>
          <p className="mb-4 text-gray-800 leading-relaxed">Segala puji bagi Allah SWT atas limpahan rahmat dan karunia-Nya. Dengan penuh rasa bangga, saya mengucapkan selamat datang di website resmi Kantor Kepala Desa Pungsari.</p>
          <p className="mb-4 text-gray-800 leading-relaxed">Website ini kami hadirkan sebagai wujud komitmen kami dalam memberikan pelayanan informasi yang transparan, cepat, dan mudah diakses oleh seluruh masyarakat. Di era digital seperti sekarang ini, keterbukaan informasi menjadi kebutuhan mutlak, dan kami siap menjawabnya.</p>
          <p className="mb-4 text-gray-800 leading-relaxed">Melalui website ini, masyarakat dapat mengenal lebih dekat Desa Pungsari — mulai dari profil desa, program kerja, struktur pemerintahan, layanan administrasi, hingga dokumentasi kegiatan masyarakat.</p>
          <p className="mb-4 text-gray-800 leading-relaxed">Kami mengajak seluruh warga untuk bersama-sama membangun desa yang lebih maju, mandiri, dan responsif terhadap perubahan zaman. Kritik dan saran sangat kami harapkan demi pelayanan yang lebih baik ke depan.</p>
          <p className="italic text-gray-700 mb-4 text-base md:text-lg">Wassalamu’alaikum warahmatullahi wabarakatuh.</p>
          <div className="mt-8 text-right">
            <span className="block font-semibold text-blue-900">Suparmin,</span>
            <span className="block text-gray-700">Kepala Desa Pungsari</span>
          </div>
        </div>
      </div>
      <p className="text-gray-800 text-sm md:text-base">
        Desa Pungsari merupakan desa yang berkembang dengan masyarakat yang ramah, berbudaya, dan memiliki potensi wisata serta pelayanan publik yang prima. Silakan jelajahi menu di atas untuk mengetahui lebih lanjut tentang desa kami.
      </p>
    </div>
  );
}
