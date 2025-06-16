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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Stats Cards */}
            {[
              { title: 'Total Pengunjung', value: '1,234', change: '+12%', trend: 'up' },
              { title: 'Total Artikel', value: '45', change: '+5', trend: 'up' },
              { title: 'Pengguna Terdaftar', value: '89', change: '+3', trend: 'up' },
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
                <div className="mt-2 flex items-baseline">
                  <span className="text-2xl font-semibold">{stat.value}</span>
                  <span className={`ml-2 text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="mt-8 bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Aktivitas Terbaru</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {[
                { id: 1, user: 'Admin', action: 'membuat artikel baru', time: '5 menit yang lalu' },
                { id: 2, user: 'Budi', action: 'mengupdate profil', time: '1 jam yang lalu' },
                { id: 3, user: 'Ani', action: 'mengunggah dokumen', time: '3 jam yang lalu' },
              ].map((activity) => (
                <div key={activity.id} className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-medium">{activity.user.charAt(0)}</span>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">
                        {activity.user} <span className="text-gray-500 font-normal">{activity.action}</span>
                      </p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}