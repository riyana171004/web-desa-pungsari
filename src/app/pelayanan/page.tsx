'use client';

import { useState } from 'react';

const services = [
  {
    id: 'akta-kelahiran',
    title: 'Akta Kelahiran',
    requirements: [
      'Surat Kelahiran Asli dari RS/Bidan',
      'KK Asli',
      'Fotocopy KTP Orang Tua',
      'Fotocopy KTP Saksi Kelahiran (2 orang)',
      'Fotocopy Buku Nikah yang dilegalisir KUA'
    ]
  },
  {
    id: 'ektp-baru',
    title: 'E-KTP Baru (Usia 17 Tahun)',
    requirements: [
      'Fotocopy KK (jika KK belum barcode lampirkan KK asli dan fotocopy buku nikah kepala keluarga)'
    ]
  },
  {
    id: 'pembaharuan-kk',
    title: 'Pembaharuan KK',
    requirements: [
      'KK Asli',
      'Fotocopy Ijazah (jika pembaharuan pendidikan)',
      'Fotocopy Akta Cerai/Buku Nikah (jika pembaharuan status)'
    ]
  },
  {
    id: 'dokumen-hilang',
    title: 'Dokumen Hilang/Rusak',
    subtitle: '(E-KTP/KK/Akta Lahir/Akta Kematian)',
    requirements: [
      'Surat Keterangan Kehilangan dari Polsek',
      'Fotocopy dokumen yang hilang/rusak'
    ]
  },
  {
    id: 'akta-kematian',
    title: 'Akta Kematian',
    requirements: [
      'Surat Kematian (Surat Kuning) dari Desa',
      'KTP yang Meninggal',
      'Fotocopy Pelapor Kematian (jika beda KK dengan yang meninggal lampirkan fotocopy KK)',
      'Fotocopy E-KTP Saksi Kematian 2 orang (jika yang meninggal KK sendiri lampirkan fotocopy E-KTP Ketua RT setempat)'
    ]
  },
  {
    id: 'kia',
    title: 'Kartu Identitas Anak (KIA)',
    requirements: [
      'Fotocopy KK',
      'Fotocopy Akta Kelahiran',
      'Fotocopy E-KTP Orang Tua',
      'Fotocopy Buku Nikah Orang Tua',
      'Foto Anak ukuran 3x4 (jika anak usia di atas 5 tahun)'
    ]
  },
  {
    id: 'numpang-nikah',
    title: 'Numpang Nikah',
    requirements: [
      'Fotocopy KTP Kedua Calon Pengantin (Laki-laki & Perempuan)',
      'Fotocopy KTP Orang Tua Calon Pengantin Laki-laki & Perempuan',
      'Fotocopy KK Kedua Calon Pengantin',
      'Fotocopy Akta Kelahiran Kedua Calon Pengantin',
      'Fotocopy Ijazah Terakhir Kedua Calon Pengantin',
      'Materai 10.000 (1 lembar)',
      'Pas foto background biru, ukuran: 2x3 (5 lembar) dan 4x6 (3 lembar)',
      'Fotocopy KTP Saksi (1 orang)',
      'Fotocopy Buku Nikah Orang Tua Laki-laki'
    ]
  },
  {
    id: 'keterangan-usaha',
    title: 'Keterangan Usaha',
    requirements: [
      'Fotocopy KTP',
      'Keterangan Jenis Usaha'
    ]
  }
];

export default function PelayananPage() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleService = (id: string) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-800 mb-2 text-center">Pelayanan Desa Pungsari</h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
        Berikut adalah daftar layanan yang tersedia di Kantor Desa Pungsari beserta persyaratan yang diperlukan.
      </p>
      
      <div className="space-y-6 max-w-4xl mx-auto">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center bg-green-50 hover:bg-green-100 transition-colors"
              onClick={() => toggleService(service.id)}
              aria-expanded={expandedService === service.id}
              aria-controls={`${service.id}-content`}
            >
              <div>
                <h2 className="text-xl font-semibold text-green-800">{service.title}</h2>
                {service.subtitle && (
                  <p className="text-sm text-gray-600 mt-1">{service.subtitle}</p>
                )}
              </div>
              {expandedService === service.id ? 
                <span className="text-green-700 text-2xl">▲</span> : 
                <span className="text-green-700 text-2xl">▼</span>}
            </button>
            
            <div 
              id={`${service.id}-content`}
              className={`transition-all duration-300 overflow-hidden ${expandedService === service.id ? 'max-h-96' : 'max-h-0'}`}
            >
              <div className="p-6 border-t border-gray-100">
                <h3 className="font-semibold text-gray-800 mb-3 text-lg">Persyaratan:</h3>
                <ul className="list-decimal pl-5 space-y-2 mb-6 text-gray-700">
                  {service.requirements.map((req, i) => (
                    <li key={i} className="pl-2">{req}</li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-4 border-t border-gray-100">
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 bg-blue-50 p-6 rounded-lg max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Informasi Layanan</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-blue-700 mb-2">Jam Layanan:</h3>
            <p className="text-gray-700">Senin - Kamis: 07.30 - 15.30 WIB</p>
            <p className="text-gray-700">Jumat: 07.30 - 11.00 WIB</p>
            <p className="text-gray-700">Sabtu - Minggu: Libur</p>
          </div>
          <div>
            <h3 className="font-semibold text-blue-700 mb-2">Kontak:</h3>
            <p className="text-gray-700">Kantor Desa Pungsari</p>
            <p className="text-gray-700">Email: desapungsari@example.com</p>
            <p className="text-gray-700">Telepon: (0271) 1234567</p>
          </div>
        </div>
      </div>
    </div>
  );
}