'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function WhatsAppSettingsPage() {
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchWhatsAppNumber();
  }, []);

  const fetchWhatsAppNumber = async () => {
    try {
      const response = await fetch('/api/pengaturan-kontak/whatsapp');
      if (response.ok) {
        const data = await response.json();
        setWhatsappNumber(data.nilai || '');
      } else {
        console.error('Gagal mengambil nomor WhatsApp');
        toast.error('Gagal memuat pengaturan WhatsApp');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Terjadi kesalahan saat memuat pengaturan');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!whatsappNumber) {
      toast.error('Nomor WhatsApp tidak boleh kosong');
      return;
    }

    // Hapus semua karakter non-angka
    const cleanNumber = whatsappNumber.replace(/\D/g, '');
    
    // Pastikan nomor diawali dengan 62
    let formattedNumber = cleanNumber;
    if (cleanNumber.startsWith('0')) {
      formattedNumber = '62' + cleanNumber.substring(1);
    } else if (!cleanNumber.startsWith('62')) {
      formattedNumber = '62' + cleanNumber;
    }

    setIsSaving(true);
    
    try {
      const response = await fetch('/api/pengaturan-kontak/whatsapp', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nama: 'whatsapp',
          nilai: formattedNumber,
          keterangan: 'Nomor WhatsApp untuk kontak',
        }),
      });

      if (response.ok) {
        toast.success('Nomor WhatsApp berhasil diperbarui');
        // Refresh data
        fetchWhatsAppNumber();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Gagal memperbarui nomor WhatsApp');
      }
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Terjadi kesalahan saat memperbarui nomor WhatsApp';
      toast.error(errorMessage);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">Pengaturan WhatsApp</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">
              Nomor WhatsApp
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                +62
              </span>
              <input
                type="tel"
                id="whatsapp"
                className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                placeholder="81234567890"
                value={whatsappNumber.replace(/^62/, '')}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                disabled={isSaving}
              />
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Masukkan nomor WhatsApp tanpa kode negara (62) di awal.
            </p>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => router.back()}
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-3"
              disabled={isSaving}
            >
              Batal
            </button>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              disabled={isSaving}
            >
              {isSaving ? 'Menyimpan...' : 'Simpan'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
