'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast';

interface SettingItem {
  id: string;
  nama: string;
  nilai: string;
  keterangan: string;
  created_at: string;
  updated_at: string;
}

export default function PengaturanKontak() {
  const [whatsapp, setWhatsapp] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    // Show browser alert when component mounts
    alert('Halaman Pengaturan WhatsApp. Silakan masukkan nomor WhatsApp yang akan digunakan untuk kontak.');
    
    const fetchData = async () => {
      try {
        const res = await fetch('/api/pengaturan-kontak')
        
        if (!res.ok) {
          throw new Error('Gagal mengambil data dari server')
        }
        
        const data: SettingItem[] = await res.json()
        const whatsappSetting = data.find(item => item.nama === 'whatsapp')
        
        if (whatsappSetting) {
          setWhatsapp(whatsappSetting.nilai)
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Terjadi kesalahan saat memuat data'
        setError(errorMessage)
        toast.error(errorMessage)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Form sedang diproses...')
    setIsSaving(true)
    setError('')

    try {
      const res = await fetch('/api/pengaturan-kontak', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nama: 'whatsapp',
          nilai: whatsapp,
          keterangan: 'Nomor WhatsApp untuk kontak'
        }),
      })

      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.error || 'Gagal menyimpan pengaturan')
      }

      // Show browser alert on successful save
      window.alert('Pengaturan WhatsApp berhasil disimpan!');
      toast.success('Pengaturan WhatsApp berhasil disimpan!');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Terjadi kesalahan yang tidak diketahui'
      setError(errorMessage)
      toast.error(errorMessage)
    } finally {
      setIsSaving(false)
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
        <h1 className="text-2xl font-bold">Pengaturan Kontak</h1>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">
                Nomor WhatsApp
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="whatsapp"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                  placeholder="Contoh: 6281234567890"
                  required
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Masukkan nomor WhatsApp dengan format kode negara (contoh: 62 untuk Indonesia) tanpa tanda + atau spasi
              </p>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSaving}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSaving ? 'Menyimpan...' : 'Simpan'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
