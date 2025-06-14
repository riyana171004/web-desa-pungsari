export default function Footer() {
  return (
    <footer className="w-full bg-blue-900 text-white py-6 mt-12 shadow-inner">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-2">
        <div className="text-sm md:text-base font-medium">
          &copy; {new Date().getFullYear()} Kantor Kepala Desa Pungsari. Semua hak cipta dilindungi.
        </div>
        <div className="text-xs md:text-sm text-blue-100 mt-2 md:mt-0">
          Dibuat dengan ❤️ untuk masyarakat Pungsari
        </div>
      </div>
    </footer>
  );
}