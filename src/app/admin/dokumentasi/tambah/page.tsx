'use client'

import { useRouter } from 'next/navigation'
import DokumentasiForm from '@/components/DokumentasiForm'

export default function TambahDokumentasiPage() {
  const router = useRouter()

  const handleSubmit = async (formData: FormData) => {
    try {
      const response = await fetch('/api/dokumentasi', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Gagal menambahkan data');
      }

      // Redirect ke halaman daftar dokumentasi setelah berhasil menambahkan
      router.push('/admin/dokumentasi')
    } catch (error) {
      console.error('Error adding data:', error);
      alert('Gagal menambahkan data. Silakan coba lagi.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Tambah Dokumentasi Baru</h1>
      <DokumentasiForm onSubmit={handleSubmit} />
    </div>
  )
}
