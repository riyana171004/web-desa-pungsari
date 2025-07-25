'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

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

interface Pariwisata {
  id: string;
  nama: string;
  deskripsi: string;
  gambar: string;
  createdAt: string;
}

interface Dokumentasi {
  id: string;
  nama: string;
  deskripsi: string;
  gambar: string;
  createdAt: string;
}

export default function PariwisataPage() {
  const [data, setData] = useState<Pariwisata[]>([]);
  const [dokumentasi, setDokumentasi] = useState<Dokumentasi[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        
        // Ambil data pariwisata & dokumentasi
        const [pariwisataRes, dokumentasiRes] = await Promise.all([
          fetch('/api/pariwisata'),
          fetch('/api/dokumentasi')
        ]);
        
        if (!pariwisataRes.ok) throw new Error('Gagal mengambil data pariwisata');
        if (!dokumentasiRes.ok) throw new Error('Gagal mengambil data dokumentasi');
        
        const pariwisataData: Pariwisata[] = await pariwisataRes.json();
        const dokumentasiData: Dokumentasi[] = await dokumentasiRes.json();
        
        // Urutkan data
        const sortedPariwisata = [...pariwisataData].sort((a, b) => 
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
        
        const sortedDokumentasi = [...dokumentasiData].sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        
        setData(sortedPariwisata);
        setDokumentasi(sortedDokumentasi);
      } catch (err) {
        console.error('Error:', err);
        setError('Gagal memuat data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <BatikBackground />
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Pariwisata Desa Pungsari</h1>
            <div className="w-20 h-1 bg-blue-600"></div>
          </div>
          
          {data.length === 0 ? (
            <div className="text-center text-gray-500 py-12 bg-white/90 backdrop-blur-sm rounded-lg shadow p-6">
              Belum ada data pariwisata yang tersedia
            </div>
          ) : (
            <div className="space-y-6">
              {data.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col md:flex-row"
                >
                  <div className="relative w-full md:w-96 h-56 flex-shrink-0">
                    <Image
                      src={item.gambar}
                      alt={item.nama}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex-1 ml-0 md:ml-4">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.nama}</h2>
                    <p className="text-gray-600 mb-4">
                      {item.deskripsi}
                    </p>
                    <div className="text-sm text-gray-500">
                      Diposting pada: {new Date(item.createdAt).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Section Dokumentasi Desa Pungsari */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Dokumentasi Desa Pungsari</h2>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            
            {dokumentasi.length === 0 ? (
              <p className="text-gray-500">Belum ada dokumentasi yang tersedia</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {dokumentasi.map((doc) => (
                  <div key={doc.id} className="group relative overflow-hidden rounded-lg bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={doc.gambar}
                        alt={doc.nama}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800">{doc.nama}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2 mt-1">{doc.deskripsi}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
