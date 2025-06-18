'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import DokumentasiForm from '@/components/DokumentasiForm'

interface Dokumentasi {
  id: string
  nama: string
  deskripsi: string
  gambar: string
  createdAt: string
}

export default function EditDokumentasiPage() {
  const [data, setData] = useState<Dokumentasi | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/dokumentasi/${id}`)
        if (!res.ok) throw new Error('Gagal mengambil data')
        const result = await res.json()
        setData(result)
      } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'Terjadi kesalahan'
        setError(errorMessage)
      } finally {
        setIsLoading(false)
      }
    }

    if (id) {
      fetchData()
    }
  }, [id])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        {error}
      </div>
    )
  }

  if (!data) {
    return <div>Data tidak ditemukan</div>
  }

  const handleSubmit = async (formData: FormData) => {
    try {
      const response = await fetch(`/api/dokumentasi/${id}`, {
        method: 'PUT',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Gagal memperbarui data');
      }

      // Redirect ke halaman daftar dokumentasi setelah berhasil update
      window.location.href = '/admin/dokumentasi';
    } catch (error) {
      console.error('Error updating data:', error);
      alert('Gagal memperbarui data. Silakan coba lagi.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Edit Dokumentasi</h1>
      <DokumentasiForm 
        initialData={data} 
        onSubmit={handleSubmit} 
      />
    </div>
  )
}
