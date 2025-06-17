import Link from "next/link";

const menu = [
  { name: "Beranda", href: "/" },
  { name: "Profile Desa", href: "/profile" },
  { name: "Pelayanan Kami", href: "/pelayanan" },
  { name: "Pariwisata dan Dokumentasi", href: "/pariwisata" },
  { name: "Kontak", href: "/kontak" },
];

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between py-4 px-6 border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center">
        <img src="/assets/logo.png" alt="Logo Kantor Desa Pungsari" className="h-10 w-auto mr-3" />
      </div>
      <nav>
        <ul className="flex gap-4 md:gap-8 text-sm md:text-base font-medium">
          {menu.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="hover:text-blue-700 transition-colors">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}