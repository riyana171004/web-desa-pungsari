import React from 'react';
import WhatsAppButton from '@/components/WhatsAppButton';

// Batik Background Component
const BatikBackground = () => (
  <div className="fixed inset-0 -z-10">
    <div 
      className="absolute inset-0 bg-cover bg-center" 
      style={{ 
        backgroundImage: "url('/assets/latarbatik.jpg')",
        opacity: 0.1
      }}
    />
  </div>
);

export default function KontakPage() {
  return (
    <div className="min-h-screen">
      <BatikBackground />
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-10">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 text-center">Kontak</h1>
            
            {/* Contact Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <WhatsAppButton />
              <a 
                href="https://instagram.com/daya_warga_desapungsari" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 2.25h9A5.25 5.25 0 0 1 21.75 7.5v9a5.25 5.25 0 0 1-5.25 5.25h-9A5.25 5.25 0 0 1 2.25 16.5v-9A5.25 5.25 0 0 1 7.5 2.25z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75h.008v.008h-.008V6.75z" />
                </svg>
                Instagram
              </a>
              <a 
                href="mailto:desapungsari123@gmail.com" 
                className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Email
              </a>
            </div>

            {/* Map Section */}
            <div className="mt-12">
              <h2 className="text-xl font-semibold text-blue-800 mb-4 text-center">Lokasi Kantor Desa Pungsari</h2>
              <div className="w-full max-w-3xl mx-auto bg-white p-4 rounded-xl shadow">
                <iframe
                  title="Lokasi Kantor Desa Pungsari"
                  src="https://www.google.com/maps?q=-7.474837,110.900186&hl=id&z=17&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '0.5rem' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-md"
                />
                <div className="mt-4 text-center">
                  <p className="text-gray-700">
                    Dusun 1, Pungsari, Kec. Plupuh, Kabupaten Sragen, Jawa Tengah 57283
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/5Dh4A14dndEHkFTX8" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block mt-2 text-blue-700 hover:underline text-sm font-medium"
                  >
                    Lihat di Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}