'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { FaImage, FaSpinner } from 'react-icons/fa'

interface DokumentasiFormData {
  nama: string;
  deskripsi: string;
  gambar: File | null;
  preview: string | null;
}

interface DokumentasiFormProps {
  initialData?: {
    id?: string;
    nama: string;
    deskripsi: string;
    gambar: string;
  } | null;
  onSubmit?: (data: FormData) => Promise<void>;
}

export default function DokumentasiForm({ 
  initialData = null, 
  onSubmit = async () => {} 
}: DokumentasiFormProps) {
  const [formData, setFormData] = useState<DokumentasiFormData>({
    nama: '',
    deskripsi: '',
    gambar: null,
    preview: null
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    if (initialData) {
      setFormData({
        nama: initialData.nama,
        deskripsi: initialData.deskripsi,
        gambar: null,
        preview: initialData.gambar
      })
    }
  }, [initialData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setFormData(prev => ({
        ...prev,
        gambar: file,
        preview: URL.createObjectURL(file)
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    const formDataToSend = new FormData()
    formDataToSend.append('nama', formData.nama)
    formDataToSend.append('deskripsi', formData.deskripsi)
    if (formData.gambar) {
      formDataToSend.append('gambar', formData.gambar)
    }

    try {
      const url = initialData 
        ? `/api/dokumentasi/${initialData.id}`
        : '/api/dokumentasi'
      
      const method = initialData ? 'PUT' : 'POST'
      
      const res = await fetch(url, {
        method,
        body: formDataToSend
      })

      if (!res.ok) {
        throw new Error(initialData ? 'Gagal memperbarui dokumentasi' : 'Gagal menambahkan dokumentasi')
      }

      router.push('/admin/dokumentasi')
      router.refresh()
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Terjadi kesalahan'
      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">
        {initialData ? 'Edit' : 'Tambah'} Dokumentasi
      </h2>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nama</label>
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
          <textarea
            name="deskripsi"
            value={formData.deskripsi}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {formData.preview ? 'Ganti Gambar' : 'Unggah Gambar'}
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            required={!initialData}
          />
          {formData.preview && (
            <div className="mt-2">
              <img 
                src={formData.preview} 
                alt="Preview" 
                className="h-40 w-auto object-cover rounded"
              />
            </div>
          )}
        </div>

        <div className="flex justify-end space-x-3 pt-4">
          <button
            type="button"
            onClick={() => router.push('/admin/dokumentasi')}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            disabled={isLoading}
          >
            Batal
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? 'Menyimpan...' : 'Simpan'}
          </button>
        </div>
      </form>
    </div>
  )
}
