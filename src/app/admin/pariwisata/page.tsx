'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { PencilIcon } from '@heroicons/react/24/outline'
import DeleteConfirmation from '@/components/DeleteConfirmation'

interface Pariwisata {
  id: string
  nama: string
  deskripsi: string
  gambar: string
  createdAt: string
}

export default function PariwisataAdminPage() {
  const [data, setData] = useState<Pariwisata[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const res = await fetch('/api/pariwisata')
      if (!res.ok) throw new Error('Gagal mengambil data')
      const result = await res.json()
      setData(result)
    } catch (err) {
      console.error('Error:', err)
      setError('Gagal memuat data pariwisata')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/pariwisata/${id}`, {
        method: 'DELETE',
      })

      if (!res.ok) throw new Error('Gagal menghapus data')
      
      // Refresh data setelah hapus
      fetchData()
    } catch (err: unknown) {
      console.error('Error:', err)
      const errorMessage = err instanceof Error ? err.message : 'Gagal menghapus data'
      alert(errorMessage)
    }
  }

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

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Kelola Pariwisata</h1>
        <Link
          href="/admin/pariwisata/tambah"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Tambah Data
        </Link>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {data.map((item) => (
            <li key={item.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img 
                    src={item.gambar} 
                    alt={item.nama} 
                    className="h-16 w-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-medium">{item.nama}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {item.deskripsi}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => router.push(`/admin/pariwisata/edit/${item.id}`)}
                    className="text-blue-600 hover:text-blue-800"
                    title="Edit"
                  >
                    <PencilIcon className="h-5 w-5" />
                  </button>
                  <DeleteConfirmation
                    onConfirm={() => handleDelete(item.id)}
                    itemName={`wisata "${item.nama}"`}
                    buttonText=""
                    className="inline-flex"
                  >
                    <div className="text-red-600 hover:text-red-800 focus:outline-none" title="Hapus">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </DeleteConfirmation>
                </div>
              </div>
            </li>
          ))}
          
          {data.length === 0 && (
            <li className="p-4 text-center text-gray-500">
              Belum ada data pariwisata
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
