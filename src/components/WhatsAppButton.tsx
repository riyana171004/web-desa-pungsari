'use client';

import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const [whatsappNumber, setWhatsappNumber] = useState('6281226785140'); // Nilai default jika gagal mengambil data
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWhatsAppNumber = async () => {
      try {
        const response = await fetch('/api/pengaturan-kontak');
        if (response.ok) {
          const data = await response.json();
          const whatsappSetting = data.find((item: any) => item.nama === 'whatsapp');
          if (whatsappSetting) {
            setWhatsappNumber(whatsappSetting.nilai);
          }
        }
      } catch (error) {
        console.error('Gagal mengambil nomor WhatsApp:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWhatsAppNumber();
  }, []);

  if (isLoading) {
    return (
      <div className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all opacity-70">
        <FaWhatsapp className="w-5 h-5" />
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <a 
      href={`https://wa.me/${whatsappNumber}`} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all"
    >
      <FaWhatsapp className="w-5 h-5" />
      WhatsApp
    </a>
  );
}
