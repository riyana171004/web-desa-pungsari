import Link from 'next/link';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-gradient-to-r from-green-800 to-green-700 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1">
            <div className="mb-4">
              <img 
                src="/assets/logo.png" 
                alt="Logo Desa Pungsari" 
                className="h-16 w-auto mb-3"
              />
            </div>
            <p className="text-sm text-gray-200 mb-4">
              Website resmi Pemerintah Desa Pungsari, Kecamatan Plupuh, Kabupaten Sragen. Menyajikan informasi terbaru seputar desa, pelayanan, dan potensi wisata.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-300">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-200 hover:text-yellow-300 transition-colors">Beranda</Link></li>
              <li><Link href="/profile" className="text-gray-200 hover:text-yellow-300 transition-colors">Profil Desa</Link></li>
              <li><Link href="/pelayanan" className="text-gray-200 hover:text-yellow-300 transition-colors">Pelayanan</Link></li>
              <li><Link href="/pariwisata" className="text-gray-200 hover:text-yellow-300 transition-colors">Pariwisata</Link></li>
              <li><Link href="/kontak" className="text-gray-200 hover:text-yellow-300 transition-colors">Kontak</Link></li>
            </ul>
          </div>

          {/* Contact Info with Map */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-300">Lokasi Kami</h3>
            <div className="w-full">
              <iframe
                title="Lokasi Kantor Desa Pungsari"
                src="https://www.google.com/maps?q=-7.474837,110.900186&hl=id&z=17&output=embed"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '0.75rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl shadow"
              ></iframe>
              <div className="text-sm text-gray-200 mt-2">
                Dusun 1, Pungsari, Kec. Plupuh, Kabupaten Sragen, Jawa Tengah 57283
              </div>
              <a 
                href="https://maps.app.goo.gl/5Dh4A14dndEHkFTX8" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-yellow-300 hover:underline text-xs mt-1 inline-block"
              >
                Lihat di Google Maps
              </a>
            </div>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-300">Jam Layanan</h3>
            <div className="text-sm text-gray-200 space-y-2">
              <p className="font-medium">Senin - Jumat</p>
              <p className="mb-2">08:00 - 16:00 WIB</p>
              <p className="font-medium">Sabtu</p>
              <p>08:00 - 14:00 WIB</p>
              <p className="text-xs mt-4 text-gray-300">*Tutup pada hari Minggu dan hari libur nasional</p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-green-600 mt-10 pt-6">
          <div className="text-center">
            <p className="text-sm text-gray-200">
              &copy; {currentYear} Pemerintah Desa Pungsari
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}