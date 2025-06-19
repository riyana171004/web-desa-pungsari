'use client';

export default function AdminDashboard() {
  return (
    <div className="h-full">

      <div className="max-w-7xl mx-auto w-full">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Selamat Datang di Dashboard Admin</h2>
          <p className="text-gray-600">
            Gunakan menu di samping untuk mengelola konten dan pengaturan website.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Welcome message is already shown above */}
        </main>
      </div>
    </div>
  );
}