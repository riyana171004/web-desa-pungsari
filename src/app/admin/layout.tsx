'use client';

import { Geist, Geist_Mono } from "next/font/google";
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Toaster } from 'react-hot-toast';

type MenuItem = {
  name: string;
  icon: string;
  href?: string;
  items?: { name: string; href: string }[];
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const menuItems: MenuItem[] = [
  { name: 'Dashboard', icon: 'dashboard', href: '/admin' },
  { name: 'Pariwisata', icon: 'map', href: '/admin/pariwisata' },
  { name: 'Dokumentasi', icon: 'camera', href: '/admin/dokumentasi' },
  { 
    name: 'Pengaturan', 
    icon: 'settings',
    items: [
      { name: 'WhatsApp', href: '/admin/pengaturan/whatsapp' }
    ]
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const pathname = usePathname();

  const handleLogout = (e: React.FormEvent) => {
    e.preventDefault();
    // Hapus token atau data sesi jika ada
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token'); // Hapus ini jika tidak menggunakan localStorage
    }
    // Redirect ke halaman beranda
    window.location.href = '/';
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'dashboard':
        return <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>;
      case 'map':
        return <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 13l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>;
      case 'user-circle':
        return <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
      case 'users':
        return <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
      case 'file-text':
        return <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
      case 'settings':
        return <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
      case 'camera':
        return <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
      default:
        return <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>;
    }
  };

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased flex h-screen bg-gray-100`}>
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            borderRadius: '10px',
            background: '#4CAF50',
            color: '#fff',
            padding: '16px',
            fontSize: '16px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          },
          iconTheme: {
            primary: '#fff',
            secondary: '#4CAF50',
          },
        }}
      />
      {/* Mobile menu button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} 
                 transform transition-transform duration-200 ease-in-out
                 fixed md:static inset-y-0 left-0 z-40 w-64 bg-blue-700 text-white`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 px-4 border-b border-blue-600">
            <h1 className="text-xl font-bold">Admin Desa Pungsari</h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 space-y-1">
            {menuItems.map((item) => (
              <div key={item.name}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      pathname === item.href ? 'bg-blue-600' : 'hover:bg-blue-600'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="mr-3">
                        {getIcon(item.icon)}
                      </span>
                      {item.name}
                    </div>
                  </Link>
                ) : item.items ? (
                  <div className="mb-1">
                    <button
                      onClick={() => {
                        const newOpenMenus = { ...openMenus };
                        newOpenMenus[item.name] = !newOpenMenus[item.name];
                        setOpenMenus(newOpenMenus);
                      }}
                      className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors hover:bg-blue-600"
                    >
                      <div className="flex items-center">
                        <span className="mr-3">
                          {getIcon(item.icon)}
                        </span>
                        {item.name}
                      </div>
                      {openMenus[item.name] ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </button>
                    {openMenus[item.name] && (
                      <div className="ml-6 mt-1 space-y-1">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`block px-4 py-2 text-sm rounded-md transition-colors ${
                              pathname === subItem.href ? 'bg-blue-600' : 'hover:bg-blue-600'
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
            ))}
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-3 text-sm font-medium text-left text-white rounded-lg hover:bg-blue-600"
            >
              <span className="mr-3">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </span>
              Keluar
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
