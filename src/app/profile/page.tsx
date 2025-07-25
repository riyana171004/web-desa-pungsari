'use client';

import { useState } from 'react';
import Image from 'next/image';
import DemografiChart from './demografi-chart';

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

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('Sejarah');

  const renderContent = () => {
    switch (activeTab) {
      case 'Sejarah':
        return (
          <div className="space-y-6 text-justify">
            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-2">Sejarah Desa Pungsari</h2>
              <p className="text-gray-700 leading-relaxed">
                Desa Pungsari adalah salah satu desa di Kecamatan Plupuh, Kabupaten Sragen, Jawa Tengah.
                Lurah pertama pada masa penjajahan Belanda adalah Bapak Wiro Kromo. Desa ini terletak di
                sebelah timur Museum Purbakala Sangiran yang merupakan warisan budaya dunia. Pungsari juga
                dikenal sebagai salah satu sentra batik terbesar di Kabupaten Sragen dan kawasan Solo Raya,
                baik batik tulis maupun cap/printing.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Batik tulis telah menjadi industri seni kerajinan yang berkembang di desa ini sejak tahun
                2000, menjadi tulang punggung ekonomi masyarakat. Selain itu, terdapat sumber mata air
                bersejarah yaitu Sendang Mbah Gumul, yang termasuk dalam Objek Diduga Cagar Budaya (ODCB)
                dan menjadi tempat diselenggarakannya ritus tradisional seperti bersih desa dan arak-arakan
                pengantin.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-2">Pembentukan Pemerintahan Desa</h2>
              <p className="text-gray-700 leading-relaxed">
                Pada 25 November 1942, Desa Pungsari resmi memiliki kepala desa pertama. Pemilihan lokasi
                pusat pemerintahan di Pungsari didasarkan pada letaknya yang berada di tengah tujuh dukuh:
                Klampeyan, Tanjungsari, Pungsari, Ngablak, Kebaksari, Taprukan, dan Karangnongko.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-2">Daftar Kepemimpinan Kepala Desa</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Ki Demang (Wiro Kromo) : 1935–1942</li>
                <li>Toto Pangerso : 1942–1986</li>
                <li>Rato : 1986–1998</li>
                <li>Sukidi : 1998–2005</li>
                <li>Sukidi : 2005–2013</li>
                <li>Suparmin : 2013–2019</li>
                <li>Joko Sarono : 2019–2023</li>
                <li>Suparmin : 2024–Sekarang</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-2">Pelayanan Kantor Kepala Desa</h2>
              <p className="text-gray-700 leading-relaxed">
                Kantor Kepala Desa Pungsari menyediakan berbagai layanan administrasi, seperti pekerjaan
                umum, pendidikan, kesehatan, perumahan, perhubungan, lingkungan hidup, pertanahan, serta
                pemberdayaan perempuan dan perlindungan anak.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Beberapa layanan spesifik yang tersedia antara lain: surat domisili, NPWP, surat kelakuan
                baik, surat pindah, surat keterangan tidak mampu, surat keterangan usaha, izin praktik, IMB,
                surat izin usaha mikro, hingga izin penebangan pohon pelindung.
              </p>
            </section>
          </div>
        );

      case 'Visi Misi':
        return (
          <div className="space-y-6 text-justify">
            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-2">VISI</h2>
              <p className="text-gray-700 leading-relaxed">MENUJU DESA MANDIRI BERINOVASI</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-2">MISI</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>mengoptimalkan pelayanan prima terhadap masyarakat serta memberikan sistem keterbukaan informasi pemerintahan desa.</li>
                <li>mengoptimalkan kinerja perangkat desa secara maksimal, sesuai tugas pokok dan fungsinya demi terwujudnya pelayanan yang baik pada masyarakat.</li>
                <li>memberdayakan semua potensi yang ada di masyarakat.</li>
                <li>menciptakan kondisi masyarakat desa Pungsari yang aman tertib, guyup rukun.</li>
                <li>optimalisasi penyelenggaraan pemerintah desa Pungsari.</li>
                <li>pembangunan sarana dan prasarana serta memberdayakan lingkungan.</li>
                <li>menumbuh kembangkan usaha kecil dan menengah.</li>
                <li>pemberdayaan ekonomi masyarakat khususnya UMKM yang berdaya saing tinggi.</li>
                <li>membangun dan mendorong usaha-usaha untuk pengembangan dan optimalisasi sektor pertanian, perkebunan, peternakan, perikanan. Baik tahap produksi maupun tahap pengolahan hasilnya.</li>
                <li>meningkatkan kemajuan dan kemandirian melalui penyelenggaraan otonomi desa yang bertanggung jawab yang didukung dengan penyelenggaraan pemerintahan yang bersih, transparan, dan profesional.</li>
              </ul>
            </section>
          </div>
        );

      case 'Struktur Organisasi':
        return (
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">Struktur Organisasi Pungsari</h2>
            <Image
              src="/assets/struktur.jpg"
              alt="Struktur Organisasi Desa Pungsari"
              width={800}
              height={600}
              className="w-full max-w-2xl rounded-xl shadow border border-gray-200 object-contain"
              style={{ background: '#fff' }}
            />
          </div>
        );

      case 'Data Demografi dan Statistik':
        return <DemografiChart />;

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <BatikBackground />
      <div className="relative z-10">
        <div className="flex flex-col items-center px-4 py-10">
          <h1 className="text-3xl font-bold text-blue-900 mb-6">Profil Desa Pungsari</h1>
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            {['Sejarah', 'Visi Misi', 'Struktur Organisasi', 'Data Demografi dan Statistik'].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-lg shadow-sm transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-blue-900 text-white'
                    : 'bg-white text-blue-900 border border-blue-900 hover:bg-blue-100'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="max-w-4xl w-full bg-white/90 backdrop-blur-sm shadow-lg rounded-xl p-6">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
