'use client'

import PariwisataForm from '@/components/PariwisataForm'

export default function TambahPariwisataPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tambah Data Pariwisata</h1>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <PariwisataForm />
      </div>
    </div>
  )
}
