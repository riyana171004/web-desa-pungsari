'use client';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: 'Pungsari',
    LK: 196, PR: 189,
    '0-4': 26, '5-14': 78, '15-24': 79, '25-59': 146, '60+': 56,
  },
  {
    name: 'Ngablak',
    LK: 257, PR: 233,
    '0-4': 29, '5-14': 83, '15-24': 92, '25-59': 178, '60+': 79,
  },
  {
    name: 'Kebaksari',
    LK: 220, PR: 252,
    '0-4': 28, '5-14': 96, '15-24': 89, '25-59': 165, '60+': 56,
  },
  {
    name: 'Tanjungsari',
    LK: 126, PR: 154,
    '0-4': 24, '5-14': 74, '15-24': 70, '25-59': 159, '60+': 48,
  },
  {
    name: 'Klampeyan',
    LK: 296, PR: 226,
    '0-4': 32, '5-14': 104, '15-24': 94, '25-59': 183, '60+': 73,
  },
  {
    name: 'Taprukan',
    LK: 148, PR: 139,
    '0-4': 18, '5-14': 68, '15-24': 69, '25-59': 98, '60+': 48,
  },
  {
    name: 'Karangnongko',
    LK: 129, PR: 134,
    '0-4': 13, '5-14': 46, '15-24': 65, '25-59': 97, '60+': 36,
  },
];

export default function DemografiChart() {
  return (
    <div className="space-y-10">
      {/* Statistik Umum */}
      <div>
        <h2 className="text-2xl font-semibold text-green-700 mb-6">Jumlah Penduduk dan Kepala Keluarga</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Total Penduduk */}
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600">TOTAL PENDUDUK</p>
                <p className="text-2xl font-bold text-gray-800">2.491 <span className="text-sm font-normal">Jiwa</span></p>
              </div>
            </div>
          </div>

          {/* Kepala Keluarga */}
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600">KEPALA KELUARGA</p>
                <p className="text-2xl font-bold text-gray-800">799 <span className="text-sm font-normal">KK</span></p>
              </div>
            </div>
          </div>

          {/* Laki-laki */}
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600">LAKI-LAKI</p>
                <p className="text-2xl font-bold text-gray-800">1.255 <span className="text-sm font-normal">Jiwa</span></p>
              </div>
            </div>
          </div>

          {/* Perempuan */}
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600">PEREMPUAN</p>
                <p className="text-2xl font-bold text-gray-800">1.236 <span className="text-sm font-normal">Jiwa</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Kelompok Usia */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
            <p className="text-sm text-gray-600">USIA 0-6 TAHUN</p>
            <p className="text-2xl font-bold text-gray-800">227 <span className="text-sm font-normal">Jiwa</span></p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
            <p className="text-sm text-gray-600">USIA 7-18 TAHUN</p>
            <p className="text-2xl font-bold text-gray-800">495 <span className="text-sm font-normal">Jiwa</span></p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
            <p className="text-sm text-gray-600">USIA 19-59 TAHUN</p>
            <p className="text-2xl font-bold text-gray-800">1.399 <span className="text-sm font-normal">Jiwa</span></p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
            <p className="text-sm text-gray-600">USIA 60+ TAHUN</p>
            <p className="text-2xl font-bold text-gray-800">370 <span className="text-sm font-normal">Jiwa</span></p>
          </div>
        </div>
      </div>

      {/* Grafik 1: Jenis Kelamin */}
      <div className="h-96">
        <h2 className="text-lg font-semibold text-blue-900 mb-2 text-center">Jumlah Penduduk per Dukuh Berdasarkan Jenis Kelamin</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="LK" fill="#1E40AF" name="Laki-laki" />
            <Bar dataKey="PR" fill="#E11D48" name="Perempuan" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Insight Boxes */}
      <div className="flex flex-col gap-4 mt-2">
        <div className="rounded-xl border border-green-200 shadow-sm px-6 py-4 bg-white text-gray-800 text-base leading-relaxed" style={{borderBottom: '4px solid #34D399'}}>
          Untuk jenis kelamin laki-laki, kelompok umur <span className="font-bold">5-14</span> adalah kelompok umur tertinggi dengan jumlah <span className="font-bold">609 orang</span> atau <span className="font-bold">24.5%</span>. Sedangkan, kelompok umur <span className="font-bold">60+</span> adalah yang terendah dengan jumlah <span className="font-bold">348 orang</span> atau <span className="font-bold">14.0%</span>.
        </div>
        <div className="rounded-xl border border-pink-200 shadow-sm px-6 py-4 bg-white text-gray-800 text-base leading-relaxed" style={{borderBottom: '4px solid #FB7185'}}>
          Untuk jenis kelamin perempuan, kelompok umur <span className="font-bold">5-14</span> adalah kelompok umur tertinggi dengan jumlah <span className="font-bold">577 orang</span> atau <span className="font-bold">23.2%</span>. Sedangkan, kelompok umur <span className="font-bold">60+</span> adalah yang terendah dengan jumlah <span className="font-bold">338 orang</span> atau <span className="font-bold">13.6%</span>.
        </div>
      </div>

      {/* Grafik 2: Distribusi Umur */}
      <div className="h-[500px]">
        <h2 className="text-lg font-semibold text-blue-900 mb-2 text-center">Distribusi Penduduk per Dukuh Berdasarkan Umur</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} stackOffset="expand">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="0-4" stackId="a" fill="#A3E635" />
            <Bar dataKey="5-14" stackId="a" fill="#34D399" />
            <Bar dataKey="15-24" stackId="a" fill="#60A5FA" />
            <Bar dataKey="25-59" stackId="a" fill="#818CF8" />
            <Bar dataKey="60+" stackId="a" fill="#F87171" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Insight Distribusi Umur */}
      <div className="rounded-xl border border-orange-200 shadow-sm px-6 py-4 bg-white text-gray-800 text-base leading-relaxed mt-2" style={{borderBottom: '4px solid #FBBF24'}}>
        Dukuh dengan jumlah penduduk tertinggi adalah <span className="font-bold">Klampeyan</span> dengan <span className="font-bold">522 jiwa</span> (20.96%), sedangkan dukuh dengan jumlah penduduk terendah adalah <span className="font-bold">Karangnongko</span> dengan <span className="font-bold">263 jiwa</span> (10.56%).
      </div>

      {/* Chart: Jumlah Kepala Keluarga Berdasarkan Tingkat Pendidikan */}
      <div className="bg-white rounded-lg shadow-md p-6 mt-8">
        <h3 className="text-lg font-semibold mb-4">Jumlah Kepala Keluarga Berdasarkan Tingkat Pendidikan</h3>
        <BarChart
          data={educationData}
          // categories={["Jumlah"]} // removed unsupported prop
          // index="Pendidikan" // not needed for recharts BarChart
          // colors={["#6366f1"]} // handled by Bar fill prop
          // valueFormatter={(number) => `${number} orang`} // handled by Tooltip
          // yAxisWidth={48} // not needed for recharts
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Pendidikan" />
          <YAxis allowDecimals={false} />
          <Tooltip formatter={(value) => `${value} orang`} />
          <Bar dataKey="Jumlah" fill="#6366f1" name="Jumlah" />
        </BarChart>
        <div className="text-sm text-gray-500 mt-2">Total: 1.311 kepala keluarga</div>
      </div>
      {/* Insight Pendidikan Kepala Keluarga */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4 rounded-md shadow-sm">
        <p className="text-gray-700 text-sm">
          Tingkat pendidikan kepala keluarga terbanyak adalah <span className="font-bold">SD</span> dengan <span className="font-bold">646 orang</span> (49,3%). Sedangkan tingkat pendidikan terendah adalah <span className="font-bold">S-2</span> dengan <span className="font-bold">2 orang</span> (0,15%).
        </p>
      </div>
    </div>
  );
}

// Education data for household heads
const educationData = [
  { Pendidikan: "SD", Jumlah: 646 },
  { Pendidikan: "SMP", Jumlah: 127 },
  { Pendidikan: "SMA", Jumlah: 259 },
  { Pendidikan: "D-3", Jumlah: 38 },
  { Pendidikan: "S-1", Jumlah: 239 },
  { Pendidikan: "S-2", Jumlah: 2 }
];
