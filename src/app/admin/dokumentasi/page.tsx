'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FaPlus } from 'react-icons/fa'
import DeleteConfirmation from '@/components/DeleteConfirmation'
import Image from 'next/image' 

interface Dokumentasi {
  id: string
  nama: string
  deskripsi: string
  gambar: string
  createdAt: string
}

export default function DokumentasiAdminPage() {
  const [data, setData] = useState<Dokumentasi[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const res = await fetch('/api/dokumentasi')
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

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/dokumentasi/${id}`, {
        method: 'DELETE'
      })
      
      if (!res.ok) throw new Error('Gagal menghapus data')
      
      fetchData()
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Terjadi kesalahan'
      setError(errorMessage)
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Kelola Dokumentasi</h1>
        <Link 
          href="/admin/dokumentasi/tambah"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
        >
          <FaPlus className="mr-2" />
          Tambah Data
        </Link>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {data.length === 0 ? (
            <li className="p-4 text-center text-gray-500">
              Belum ada data dokumentasi
            </li>
          ) : (
            data.map((item) => (
              <li key={item.id} className="p-4 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Image 
                      src={item.gambar} 
                      alt={item.nama} 
                      width={64} 
                      height={64} 
                      className="h-16 w-16 object-cover rounded"
                      unoptimized // supaya tidak error jika gambar dari luar
                    />
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-medium text-gray-900 truncate">{item.nama}</h3>
                      <p className="text-sm text-gray-500 line-clamp-2">
                        {item.deskripsi}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {new Date(item.createdAt).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => router.push(`/admin/dokumentasi/edit/${item.id}`)}
                      className="text-blue-600 hover:text-blue-800 p-1 rounded-full hover:bg-blue-50"
                      title="Edit"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.793.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </button>
                    <DeleteConfirmation
                      onConfirm={() => handleDelete(item.id)}
                      itemName={`dokumentasi "${item.nama}"`}
                      buttonText=""
                      className="inline-flex"
                    >
                      <div className="text-red-600 hover:text-red-800 p-1 rounded-full hover:bg-red-50 focus:outline-none" title="Hapus">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </DeleteConfirmation>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  )
}
