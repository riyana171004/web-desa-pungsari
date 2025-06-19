import React from 'react';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function KontakPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-10 text-center">
      <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Kontak</h1>
      <p className="text-base md:text-lg text-gray-700 max-w-2xl mb-6">
        {/* Halaman ini berisi informasi kontak Kantor Desa Pungsari. Silakan lengkapi konten sesuai kebutuhan Anda. */}
      </p>
      {/* Reach Out Section */}
      <div className="mb-8 flex flex-col items-center gap-4">
        {/* <h2 className="text-lg font-semibold text-blue-800">Reach Out</h2> */}
        <div className="flex gap-4">
          <WhatsAppButton />
          <a href="https://instagram.com/daya_warga_desapungsari" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 2.25h9A5.25 5.25 0 0 1 21.75 7.5v9a5.25 5.25 0 0 1-5.25 5.25h-9A5.25 5.25 0 0 1 2.25 16.5v-9A5.25 5.25 0 0 1 7.5 2.25z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75h.008v.008h-.008V6.75z" /></svg>
            Instagram
          </a>
          <a href="mailto:desapungsari123@gmail.com" className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            Email
          </a>
        </div>
      </div>
      {/* Form Kirim Pesan */}
      <form className="w-full max-w-md bg-white rounded-xl shadow p-6 flex flex-col gap-4">
        {/* <h2 className="text-lg font-semibold text-blue-800 mb-2">Kirim Pesan</h2>
        <input type="text" name="nama" placeholder="Nama" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
        <input type="email" name="email" placeholder="Email" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
        <textarea name="pesan" placeholder="Pesan" rows={4} className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" required></textarea>
        <button type="submit" className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-all">Kirim</button> */}
        {/* MAPS KANTOR KEPALA DESA PUNGSARI */}
        <div className="w-full max-w-md mt-8 flex flex-col items-center gap-2">
          <h2 className="text-lg font-semibold text-blue-800 mb-2">MAPS KANTOR KEPALA DESA PUNGSARI</h2>
          <iframe
            title="Lokasi Kantor Desa Pungsari"
            src="https://www.google.com/maps?q=-7.474837,110.900186&hl=id&z=17&output=embed"
            width="100%"
            height="250"
            style={{ border: 0, borderRadius: '0.75rem' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl shadow"
          ></iframe>
          <div className="text-sm text-gray-700 mt-2">
            Dusun 1, Pungsari, Kec.Plupuh, Kabupaten Sragen, Jawa Tengah 57283, Indonesia
          </div>
          <a href="https://maps.app.goo.gl/5Dh4A14dndEHkFTX8" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline text-xs mt-1">Lihat di Google Maps</a>
        </div>
      </form>
    </div>
  );
}