'use client'

import { useState, ChangeEvent } from 'react'
import { useRouter } from 'next/navigation'

interface PariwisataFormProps {
  initialData?: {
    id?: string
    nama: string
    deskripsi: string
    gambar: string
  }
}

export default function PariwisataForm({ initialData }: PariwisataFormProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    nama: initialData?.nama || '',
    deskripsi: initialData?.deskripsi || '',
    gambar: '' as string | File,
  })
  const [preview, setPreview] = useState(initialData?.gambar || '')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData(prev => ({ ...prev, gambar: file }))
      setPreview(URL.createObjectURL(file))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('nama', formData.nama)
      formDataToSend.append('deskripsi', formData.deskripsi)
      if (formData.gambar instanceof File) {
        formDataToSend.append('gambar', formData.gambar)
      }

      const url = initialData?.id 
        ? `/api/pariwisata/${initialData.id}`
        : '/api/pariwisata'
      
      const method = initialData?.id ? 'PUT' : 'POST'

      const res = await fetch(url, {
        method,
        body: formDataToSend,
      })

      if (!res.ok) {
        throw new Error('Gagal menyimpan data')
      }

      router.push('/admin/pariwisata')
      router.refresh()
    } catch (err) {
      console.error('Error:', err)
      setError('Terjadi kesalahan saat menyimpan data')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Nama Tempat</label>
        <input
          type="text"
          name="nama"
          value={formData.nama}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Deskripsi</label>
        <textarea
          name="deskripsi"
          value={formData.deskripsi}
          onChange={handleChange}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Gambar</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        {preview && (
          <div className="mt-2">
            <img 
              src={preview} 
              alt="Preview" 
              className="h-32 w-32 object-cover rounded"
            />
          </div>
        )}
      </div>

      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={() => router.push('/admin/pariwisata')}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          Batal
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {isLoading ? 'Menyimpan...' : 'Simpan'}
        </button>
      </div>
    </form>
  )
}
