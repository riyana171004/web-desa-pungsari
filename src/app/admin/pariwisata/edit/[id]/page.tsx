'use client'

import { useEffect, useState } from 'react'
import { useParams, } from 'next/navigation'
import PariwisataForm from '@/components/PariwisataForm'

interface Pariwisata {
  id: string
  nama: string
  deskripsi: string
  gambar: string
}

export default function EditPariwisataPage() {
  const { id } = useParams()
  const [data, setData] = useState<Pariwisata | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/pariwisata/${id}`)
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

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Edit Data Pariwisata</h1>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <PariwisataForm initialData={data} />
      </div>
    </div>
  )
}
