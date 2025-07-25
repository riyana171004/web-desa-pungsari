'use client';

import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Main Batik Background */}
      <div className="fixed inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/latarbatik.jpg')",
            opacity: 0.1,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section with Batik Background */}
        <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/assets/batik.jpg"
              alt="Batik Desa Pungsari"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center text-center p-4">
              <div className="relative">
                <div className="relative px-8 py-6 md:px-12 md:py-10">
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 [text-shadow:0_6px_12px_rgba(0,0,0,0.8)] [text-stroke:2px_#000] [paint-order:stroke_fill] [-webkit-text-stroke:2px_#000] text-center">
                    Website Resmi Kantor Kepala Desa Pungsari
                  </h1>
                  <div className="w-32 h-1 bg-yellow-400 mx-auto mb-6 shadow-xl shadow-yellow-400/70"></div>
                  <p className="text-xl md:text-2xl lg:text-3xl text-white/95 max-w-4xl mx-auto italic [text-shadow:0_6px_12px_rgba(0,0,0,0.8)] font-medium [text-stroke:1.5px_#000] [paint-order:stroke_fill] [-webkit-text-stroke:1.5px_#000]">
                    Sumber informasi terbaru tentang pemerintahan di Desa Pungsari
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Selamat Datang di Kantor Kepala Desa Pungsari
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Website resmi Kantor Kepala Desa Pungsari. Temukan informasi seputar profil desa, pelayanan masyarakat, dan kontak layanan kami. Kami berkomitmen memberikan pelayanan terbaik untuk masyarakat Pungsari.
            </p>
          </div>

          {/* Profile Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
            <div className="md:flex">
              <div className="md:w-1/3 bg-blue-700 p-8 flex flex-col items-center justify-center text-center">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6 relative">
                  <Image
                    src="/assets/kades.jpg"
                    alt="Kepala Desa Pungsari"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="text-2xl font-bold text-white">Suparmin</h3>
                <p className="text-blue-200">Kepala Desa Pungsari</p>
              </div>
              <div className="md:w-2/3 p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Sambutan <span className="text-blue-600">Kepala Desa</span>
                </h2>
                <div className="prose max-w-none text-gray-700 space-y-4">
                  <p className="italic">Assalamu&apos;alaikum warahmatullahi wabarakatuh,</p>
                  <p>Selamat datang di website resmi Desa Pungsari. Dengan segala kerendahan hati, saya mengucapkan terima kasih atas kunjungan Anda ke situs web kami.</p>
                  <p>Website ini kami hadirkan sebagai media informasi dan komunikasi antara pemerintah desa dengan seluruh lapisan masyarakat. Melalui website ini, kami berkomitmen untuk terus meningkatkan pelayanan publik yang transparan, akuntabel, dan berkualitas.</p>
                  <p>Kami mengajak seluruh elemen masyarakat untuk bersama-sama membangun desa yang lebih maju, mandiri, dan sejahtera. Mari kita jaga semangat gotong royong yang telah menjadi ciri khas masyarakat Desa Pungsari.</p>
                  <p className="italic">Wassalamu&apos;alaikum warahmatullahi wabarakatuh.</p>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center">
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500">Kepala Desa Pungsari</p>
                      <p className="text-lg font-semibold text-gray-900">Suparmin</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Geographic Info Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-3">Profil Geografis</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative w-full h-96 md:h-[500px]">
                <Image
                  src="/assets/geografi.jpg"
                  alt="Peta dan Kondisi Geografis Desa Pungsari"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="p-6 md:p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Secara geografis, Desa Pungsari terletak di Kecamatan Plupuh sebelah barat yang berbatasan dengan Kecamatan Kalijambe. 
                  Secara administratif, Desa Pungsari berada di wilayah Kecamatan Plupuh, Kabupaten Sragen, Provinsi Jawa Tengah.
                </p>

                {/* Luas, Koordinat, Iklim */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {/* Coordinates */}
                  <div className="bg-blue-50 p-5 rounded-xl">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Koordinat
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>110°52&apos;45.7&quot; E (110.8793614)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>7°27&apos;44.0&quot; S (-7.4622351)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Ketinggian: 102 mdpl</span>
                      </li>
                    </ul>
                  </div>

                  {/* Area */}
                  <div className="bg-green-50 p-5 rounded-xl">
                    <h3 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0 2v2m0 0V5m0 6h2m-2 0h-2" />
                      </svg>
                      Luas Wilayah
                    </h3>
                    <div className="space-y-3">
                      <p className="text-2xl font-bold text-green-800">251,45 <span className="text-lg font-normal">Hektar</span></p>
                      <div className="space-y-2">
                        {[
                          { name: 'Pemukiman', value: 80, color: 'bg-blue-500' },
                          { name: 'Pertanian', value: 150, color: 'bg-green-500' },
                          { name: 'Lainnya', value: 21.45, color: 'bg-yellow-500' }
                        ].map((item, i) => (
                          <div key={i} className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>{item.name}</span>
                              <span className="font-medium">{item.value} Ha</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full ${item.color}`} 
                                style={{ width: `${(item.value / 251.45) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Climate */}
                  <div className="bg-amber-50 p-5 rounded-xl">
                    <h3 className="text-lg font-semibold text-amber-900 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Iklim
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between bg-white p-3 rounded-lg">
                        <span className="text-gray-700">Suhu Rata-rata</span>
                        <span className="font-semibold text-gray-900">30°C</span>
                      </div>
                      <div className="flex items-center justify-between bg-white p-3 rounded-lg">
                        <span className="text-gray-700">Curah Hujan</span>
                        <span className="font-semibold text-gray-900">2000-3000 mm/tahun</span>
                      </div>
                      <div className="flex items-center justify-between bg-white p-3 rounded-lg">
                        <span className="text-gray-700">Musim</span>
                        <span className="font-semibold text-gray-900">Kemarau &amp; Hujan</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Boundaries & Administrative Area */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Boundaries */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Batas Wilayah
                    </h3>
                    <div className="space-y-3">
                      {[
                        { direction: 'Utara', village: 'Desa Manyarejo', district: 'Plupuh', icon: '↑' },
                        { direction: 'Selatan', village: 'Desa Jembangan', district: 'Plupuh', icon: '↓' },
                        { direction: 'Barat', village: 'Desa Bukuran', district: 'Kalijambe', icon: '←' },
                        { direction: 'Timur', village: 'Desa Jabung', district: 'Plupuh', icon: '→' }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <span className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm text-lg font-medium text-blue-600 mr-3">
                            {item.icon}
                          </span>
                          <div>
                            <p className="font-medium text-gray-900">Sebelah {item.direction}</p>
                            <p className="text-sm text-gray-600">{item.village}, Kec. {item.district}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Administrative Area */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      Wilayah Administrasi
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-xl">
                        <p className="text-3xl font-bold text-blue-700">7</p>
                        <p className="text-sm text-blue-600">Dusun</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-xl">
                        <p className="text-3xl font-bold text-green-700">13</p>
                        <p className="text-sm text-green-600">RT</p>
                      </div>
                    </div>
                    <div className="mt-4 bg-gray-50/80 backdrop-blur-sm p-4 rounded-xl">
                      <p className="font-medium text-gray-800 mb-2">Daftar Dusun:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {['Klampeyan', 'Tanjungsari', 'Pungsari', 'Ngablak', 'Kebaksari', 'Taprukan', 'Karangnongko'].map((dusun, i) => (
                          <div key={i} className="flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                            <span className="text-sm text-gray-700">{dusun}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> {/* End Geographic Info Section */}
        </div>
      </div>
    </div>
  );
}
