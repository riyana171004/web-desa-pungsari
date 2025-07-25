import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';

const menu = [
  { name: "Beranda", href: "/" },
  { name: "Profile Desa", href: "/profile" },
  { name: "Pelayanan Kami", href: "/pelayanan" },
  { name: "Pariwisata dan Dokumentasi", href: "/pariwisata" },
  { name: "Kontak", href: "/kontak" },
];

export default function Header() {
  const pathname = usePathname();
  
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname?.startsWith(href);
  };

  return (
    <header className="w-full flex items-center justify-between py-5 px-6 bg-gradient-to-r from-green-800 to-green-700 shadow-lg">
      <div className="flex items-center">
        <Image 
          src="/assets/logo.png" 
          alt="Logo Kantor Desa Pungsari" 
          width={56}   // set sesuai ukuran logo
          height={56}  // set sesuai ukuran logo
          className="h-14 w-auto mr-3"
        />
        <div className="hidden md:block">
          <h1 className="text-xl font-bold text-white">Desa Pungsari</h1>
          <p className="text-xs text-yellow-100">Kecamatan Plupuh, Sragen</p>
        </div>
      </div>
      <nav>
        <ul className="flex gap-4 md:gap-8 text-base md:text-lg font-medium">
          {menu.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.name}>
                <Link 
                  href={item.href} 
                  className={`${active ? 'text-yellow-300' : 'text-white'} hover:text-yellow-300 font-bold transition-colors`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}