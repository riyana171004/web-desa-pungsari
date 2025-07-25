'use client';
import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import type { Payload, ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';
import { TooltipProps } from 'recharts';

// BPJS Kesehatan Data Type
type BpjsData = {
  name: string;
  aktif: number;
  tidakAktif: number;
  belumDaftar: number;
  total: number;
  persenAktif: number;
  persenTidakAktif: number;
  persenBelumDaftar: number;
};

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
      <div className="mt-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-green-800">Jumlah Penduduk per Dukuh Berdasarkan Jenis Kelamin</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-green-700 mb-3">Kategori Jenis Kelamin</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-blue-600 mr-2"></span>
                <span>Laki-laki</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-pink-600 mr-2"></span>
                <span>Perempuan</span>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-green-700 mb-3">Analisis</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Rasio jenis kelamin di Desa Pungsari relatif seimbang antara laki-laki dan perempuan</li>
              <li>• <span className="font-medium">Dukuh Klampeyan</span> memiliki jumlah penduduk tertinggi untuk kedua jenis kelamin</li>
              <li>• Perbandingan rata-rata laki-laki dan perempuan di setiap dukuh berkisar antara 48-52%</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="h-[500px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 20, right: 20, left: 0, bottom: 60 }}
                barGap={0}
                barCategoryGap="20%"
                layout="vertical"
              >
                <defs>
                  <linearGradient id="colorLaki" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#1E40AF" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="#1E40AF" stopOpacity={0.6}/>
                  </linearGradient>
                  <linearGradient id="colorPerempuan" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#E11D48" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="#E11D48" stopOpacity={0.6}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f0f0f0" />
                <XAxis 
                  type="number"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                />
                <YAxis 
                  dataKey="name"
                  type="category"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#4B5563', fontSize: 13 }}
                  width={100}
                />
                <Tooltip 
                  contentStyle={{
                    background: 'rgba(255, 255, 255, 0.96)',
                    border: '1px solid #e5e7eb',
                    borderRadius: '0.5rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    padding: '0.75rem 1rem',
                    fontSize: '0.875rem',
                    maxWidth: '300px'
                  }}
                  formatter={(value: number, name: string) => {
                    const labels: {[key: string]: string} = {
                      'LK': 'Laki-laki',
                      'PR': 'Perempuan'
                    };
                    return [value, labels[name] || name];
                  }}
                  labelFormatter={(label) => `Dukuh ${label}`}
                />
                <Legend 
                  verticalAlign="bottom"
                  height={60}
                  wrapperStyle={{
                    paddingTop: '20px',
                    fontSize: '0.85rem'
                  }}
                  formatter={() => null}
                />
                <Bar dataKey="LK" name="Laki-laki" fill="url(#colorLaki)" radius={[0, 4, 4, 0]} />
                <Bar dataKey="PR" name="Perempuan" fill="url(#colorPerempuan)" radius={[4, 0, 0, 4]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Grafik 2: Distribusi Umur */}
      <div className="mt-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-green-800">Distribusi Penduduk per Dukuh Berdasarkan Umur</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-green-700 mb-3">Kategori Umur</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-green-300 mr-2"></span>
                <span>0-4 Tahun</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                <span>5-14 Tahun</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-blue-400 mr-2"></span>
                <span>15-24 Tahun</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-indigo-400 mr-2"></span>
                <span>25-59 Tahun</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-red-400 mr-2"></span>
                <span>60+ Tahun</span>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-green-700 mb-3">Analisis</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Kelompok umur <span className="font-medium">5-14 tahun</span> merupakan kelompok terbesar di semua dukuh</li>
              <li>• <span className="font-medium">Dukuh Klampeyan</span> memiliki jumlah penduduk tertinggi di semua kelompok umur</li>
              <li>• Kelompok usia produktif (15-59 tahun) mendominasi dengan persentase sekitar 60% dari total penduduk</li>
              <li>• Penduduk lansia (60+ tahun) berkisar 13-15% di setiap dukuh</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="h-[500px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 20, right: 20, left: 0, bottom: 60 }}
                barGap={0}
                barCategoryGap="20%"
                layout="vertical"
              >
                <defs>
                  <linearGradient id="colorAge0_4" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#86EFAC" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="#86EFAC" stopOpacity={0.6}/>
                  </linearGradient>
                  <linearGradient id="colorAge5_14" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#34D399" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="#34D399" stopOpacity={0.6}/>
                  </linearGradient>
                  <linearGradient id="colorAge15_24" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="#60A5FA" stopOpacity={0.6}/>
                  </linearGradient>
                  <linearGradient id="colorAge25_59" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#818CF8" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="#818CF8" stopOpacity={0.6}/>
                  </linearGradient>
                  <linearGradient id="colorAge60" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#F87171" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="#F87171" stopOpacity={0.6}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f0f0f0" />
                <XAxis 
                  type="number"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                />
                <YAxis 
                  dataKey="name"
                  type="category"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#4B5563', fontSize: 13 }}
                  width={100}
                />
                <Tooltip 
                  contentStyle={{
                    background: 'rgba(255, 255, 255, 0.96)',
                    border: '1px solid #e5e7eb',
                    borderRadius: '0.5rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    padding: '0.75rem 1rem',
                    fontSize: '0.875rem',
                    maxWidth: '300px'
                  }}
                  formatter={(value: number, name: string) => {
                    const ageGroups = ['0-4 Tahun', '5-14 Tahun', '15-24 Tahun', '25-59 Tahun', '60+ Tahun'];
                    const index = ['0-4', '5-14', '15-24', '25-59', '60+'].indexOf(name);
                    const label = index >= 0 ? ageGroups[index] : name;
                    return [value, label];
                  }}
                  labelFormatter={(label) => `Dukuh ${label}`}
                />
                <Legend 
                  verticalAlign="bottom"
                  height={60}
                  wrapperStyle={{
                    paddingTop: '20px',
                    fontSize: '0.85rem'
                  }}
                  formatter={() => null}
                />
                <Bar dataKey="0-4" name="0-4" fill="url(#colorAge0_4)" stackId="a" />
                <Bar dataKey="5-14" name="5-14" fill="url(#colorAge5_14)" stackId="a" />
                <Bar dataKey="15-24" name="15-24" fill="url(#colorAge15_24)" stackId="a" />
                <Bar dataKey="25-59" name="25-59" fill="url(#colorAge25_59)" stackId="a" />
                <Bar dataKey="60+" name="60+" fill="url(#colorAge60)" stackId="a" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    
      {/* Grafik 3: Tingkat Kesejahteraan Keluarga */}
      <div className="mt-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-green-800">Tingkat Kesejahteraan Keluarga per Dukuh</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-green-700 mb-3">Kategori Kesejahteraan</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-red-400 mr-2"></span>
                <span>Pra Sejahtera</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></span>
                <span>Sejahtera I</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-green-400 mr-2"></span>
                <span>Sejahtera II</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-blue-400 mr-2"></span>
                <span>Sejahtera III</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-indigo-400 mr-2"></span>
                <span>Sejahtera III+</span>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-green-700 mb-3">Analisis</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• <span className="font-medium">Dukuh Kebaksari</span> memiliki jumlah keluarga terbanyak di kategori Sejahtera I dan II</li>
              <li>• <span className="font-medium">Dukuh Pungsari</span> memiliki persentase tertinggi untuk kategori Pra Sejahtera</li>
              <li>• Kategori Sejahtera III+ masih didominasi oleh <span className="font-medium">Dukuh Kebaksari</span> dan <span className="font-medium">Ngablak</span></li>
              <li>• Secara keseluruhan, mayoritas keluarga berada pada kategori Sejahtera I dan II</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="h-[500px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={welfareData.filter(d => d.name !== 'TOTAL')}
                margin={{ top: 20, right: 20, left: 0, bottom: 60 }}
                barGap={0}
                barCategoryGap="20%"
                layout="vertical"
              >
                <defs>
                  <linearGradient id="colorPraSejahtera" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#F87171" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="#F87171" stopOpacity={0.6}/>
                  </linearGradient>
                  <linearGradient id="colorSejahtera1" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#FBBF24" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="#FBBF24" stopOpacity={0.6}/>
                  </linearGradient>
                  <linearGradient id="colorSejahtera2" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#34D399" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="#34D399" stopOpacity={0.6}/>
                  </linearGradient>
                  <linearGradient id="colorSejahtera3" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="#60A5FA" stopOpacity={0.6}/>
                  </linearGradient>
                  <linearGradient id="colorSejahtera3Plus" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#818CF8" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="#818CF8" stopOpacity={0.6}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f0f0f0" />
                <XAxis 
                  type="number"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                />
                <YAxis 
                  dataKey="name"
                  type="category"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#4B5563', fontSize: 13 }}
                  width={100}
                />
                <Tooltip 
                  contentStyle={{
                    background: 'rgba(255, 255, 255, 0.96)',
                    border: '1px solid #e5e7eb',
                    borderRadius: '0.5rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    padding: '0.75rem 1rem',
                    fontSize: '0.875rem'
                  }}
                  itemStyle={{
                    padding: '0.25rem 0',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                  labelStyle={{
                    fontWeight: 600,
                    color: '#1F2937',
                    marginBottom: '0.5rem',
                    borderBottom: '1px solid #e5e7eb',
                    paddingBottom: '0.5rem'
                  }}
                  formatter={(value, name) => [`${value} KK`, name]}
                />
                <Bar dataKey="praSejahtera" name="Pra Sejahtera" fill="url(#colorPraSejahtera)" radius={[0, 4, 4, 0]} />
                <Bar dataKey="sejahtera1" name="Sejahtera I" fill="url(#colorSejahtera1)" radius={[0, 4, 4, 0]} />
                <Bar dataKey="sejahtera2" name="Sejahtera II" fill="url(#colorSejahtera2)" radius={[0, 4, 4, 0]} />
                <Bar dataKey="sejahtera3" name="Sejahtera III" fill="url(#colorSejahtera3)" radius={[0, 4, 4, 0]} />
                <Bar dataKey="sejahtera3Plus" name="Sejahtera III+" fill="url(#colorSejahtera3Plus)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Grafik 4: Tingkat Pendidikan */}
      <div className="mt-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-green-800">Jumlah Kepala Keluarga Berdasarkan Tingkat Pendidikan</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-green-700 mb-3">Keterangan</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-blue-400 mr-2"></span>
                <span>Jumlah Kepala Keluarga</span>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-green-700 mb-3">Analisis</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Mayoritas kepala keluarga di Desa Pungsari memiliki tingkat pendidikan <span className="font-medium">SMA</span> (51.4%)</li>
              <li>• Pendidikan <span className="font-medium">S-1</span> menempati urutan kedua dengan 19.8%</li>
              <li>• Pendidikan <span className="font-medium">SD</span> dan <span className="font-medium">SMP</span> masing-masing menyumbang 16.2% dan 9.7%</li>
              <li>• Pendidikan tinggi (<span className="font-medium">D-3</span> dan <span className="font-medium">S-2</span>) masih relatif rendah</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="h-[500px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={educationData}
                margin={{ top: 20, right: 20, left: 0, bottom: 30 }}
                barGap={0}
                barCategoryGap="20%"
                layout="vertical"
              >
                <defs>
                  <linearGradient id="colorEducation" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="#4F46E5" stopOpacity={0.6}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f0f0f0" />
                <XAxis 
                  type="number"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                />
                <YAxis 
                  dataKey="name"
                  type="category"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#4B5563', fontSize: 13 }}
                  width={80}
                />
                <Tooltip 
                  contentStyle={{
                    background: 'rgba(255, 255, 255, 0.96)',
                    border: '1px solid #e5e7eb',
                    borderRadius: '0.5rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    padding: '0.75rem 1rem',
                    fontSize: '0.875rem'
                  }}
                  itemStyle={{
                    padding: '0.25rem 0',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                  labelStyle={{
                    fontWeight: 600,
                    color: '#1F2937',
                    marginBottom: '0.5rem',
                    borderBottom: '1px solid #e5e7eb',
                    paddingBottom: '0.5rem'
                  }}
                  formatter={(value) => [`${value} Jiwa`, 'Jumlah']}
                />
                <Bar dataKey="value" name="Jumlah" fill="url(#colorEducation)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Grafik 5: Penggunaan Lahan */}
<div className="mt-12">
  <div className="text-center mb-8">
    <h2 className="text-2xl font-bold text-green-800">Penggunaan Lahan di Desa Pungsari</h2>
  </div>

  <div className="grid md:grid-cols-3 gap-8 mb-8">
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-green-700 mb-3">Keterangan</h3>
      <ul className="space-y-2">
        <li className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-indigo-500 mr-2"></span>
          <span>Sawah</span>
        </li>
        <li className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-emerald-500 mr-2"></span>
          <span>Perkebunan</span>
        </li>
        <li className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-amber-500 mr-2"></span>
          <span>Hutan Rakyat</span>
        </li>
        <li className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-gray-500 mr-2"></span>
          <span>Pemukiman & Lainnya</span>
        </li>
      </ul>
    </div>

    <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-green-700 mb-3">Analisis</h3>
      <ul className="space-y-3 text-gray-700">
        <li>• Total luas Desa Pungsari: <span className="font-medium">251,45 Ha</span></li>
        <li>• <span className="font-medium">Sawah</span> mendominasi penggunaan lahan dengan total <span className="font-medium">154 Ha</span> (61.2%)</li>
        <li>• <span className="font-medium">Hutan Rakyat</span> menempati urutan kedua dengan <span className="font-medium">43 Ha</span> (17.1%)</li>
        <li>• <span className="font-medium">Pemukiman & Lainnya</span> (termasuk makam dan pekarangan) seluas <span className="font-medium">48,45 Ha</span> (19.3%)</li>
        <li>• <span className="font-medium">Perkebunan</span> memiliki porsi terkecil dengan hanya <span className="font-medium">6 Ha</span> (2.4%)</li>
      </ul>
    </div>
  </div>

  {/* Bar Chart */}
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
    <div className="h-[500px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={landUseData.filter(d => d.name !== 'TOTAL')}
          margin={{ top: 20, right: 20, left: 0, bottom: 30 }}
          barGap={0}
          barCategoryGap="15%"
        >
          <defs>
            <linearGradient id="colorSawah" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.9}/>
              <stop offset="95%" stopColor="#4F46E5" stopOpacity={0.3}/>
            </linearGradient>
            <linearGradient id="colorPerkebunan" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10B981" stopOpacity={0.9}/>
              <stop offset="95%" stopColor="#10B981" stopOpacity={0.3}/>
            </linearGradient>
            <linearGradient id="colorHutanRakyat" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.9}/>
              <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.3}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
          <XAxis 
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#4B5563', fontSize: 13 }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6B7280', fontSize: 12 }}
            width={35}
          />
          <Tooltip 
            contentStyle={{
              background: 'rgba(255, 255, 255, 0.96)',
              border: '1px solid #e5e7eb',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              padding: '0.75rem 1rem',
              fontSize: '0.875rem'
            }}
            formatter={(value: number, name: string) => [`${value} Ha`, name]}
          />
          <Bar dataKey="sawah" name="Sawah" fill="url(#colorSawah)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="perkebunan" name="Perkebunan" fill="url(#colorPerkebunan)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="hutanRakyat" name="Hutan Rakyat" fill="url(#colorHutanRakyat)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>

  {/* Pie Chart */}
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <div className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={landUseSummary}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={120}
            paddingAngle={2}
            dataKey="value"
            label={({ name, percent }: { name: string; percent: number }) => `${name}: ${(percent * 100).toFixed(1)}%`}
            labelLine={false}
          >
            {landUseSummary.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value: number) => [`${value} Ha`, 'Luas']}
            contentStyle={{
              background: 'rgba(255, 255, 255, 0.96)',
              border: '1px solid #e5e7eb',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              padding: '0.75rem 1rem',
              fontSize: '0.875rem'
            }}
          />
          <Legend 
            layout="horizontal" 
            verticalAlign="bottom"
            wrapperStyle={{ paddingTop: '20px' }}
            formatter={(value, entry, index) => (
              <span className="text-gray-700 text-sm">
                {value} ({landUseSummary[index].value} Ha)
              </span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>
</div>

      {/* Grafik 6: Mata Pencaharian */}
      <div className="mt-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-green-800">Mata Pencaharian Penduduk Desa Pungsari</h2>
          <p className="text-gray-600 mt-2">Distribusi Pekerjaan berdasarkan Sektor Ekonomi</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-green-800 mb-5 flex items-center">
              <span className="mr-2">📊</span> Kategori Pekerjaan
            </h3>
            <div className="space-y-5 max-h-[600px] overflow-y-auto pr-2 -mr-2">
              {groupedByCategory.map((category, index) => (
                <div key={index} className="space-y-2.5">
                  <div className="flex items-center justify-between px-3 py-2.5 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="flex items-center">
                      <span 
                        className="w-2.5 h-2.5 rounded-full mr-2.5 flex-shrink-0 shadow-sm" 
                        style={{ backgroundColor: category.color }}
                      ></span>
                      <span className="font-semibold text-gray-800 text-sm">{category.name}</span>
                    </div>
                    <span className="text-xs font-semibold text-gray-700 bg-white px-2.5 py-1 rounded-full border border-gray-200">
                      {category.value.toLocaleString('id-ID')} Jiwa
                    </span>
                  </div>
                  
                  <div className="space-y-1.5 pl-1 pr-1">
                    {category.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex} 
                        className="flex justify-between items-center py-2 px-3 hover:bg-gray-50 rounded-lg transition-colors group"
                      >
                        <span className="flex items-center text-sm text-gray-700">
                          <span className="text-[15px] mr-3 w-5 text-center opacity-80 group-hover:opacity-100">
                            {item.icon}
                          </span>
                          <span className="font-medium text-gray-800">{item.name}</span>
                        </span>
                        <span className="text-xs font-semibold text-gray-700 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100 group-hover:border-gray-200">
                          {item.value.toLocaleString('id-ID')}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {index < groupedByCategory.length - 1 && (
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent my-1"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-green-700 mb-4 flex items-center">
              <span className="mr-2">📈</span> Analisis Pekerjaan
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Total Penduduk Usia Kerja: 1.504 Jiwa</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-white rounded-lg shadow-xs border">
                    <div className="text-2xl font-bold text-green-600">30.2%</div>
                    <div className="text-sm text-gray-600">Bekerja di Sektor Pertanian</div>
                    <div className="text-xs text-gray-500">(454 Jiwa - Petani & Buruh Tani)</div>
                  </div>
                  <div className="p-3 bg-white rounded-lg shadow-xs border">
                    <div className="text-2xl font-bold text-indigo-600">27.8%</div>
                    <div className="text-sm text-gray-600">Pegawai Swasta</div>
                    <div className="text-xs text-gray-500">(418 Jiwa)</div>
                  </div>
                  <div className="p-3 bg-white rounded-lg shadow-xs border">
                    <div className="text-2xl font-bold text-purple-600">25.4%</div>
                    <div className="text-sm text-gray-600">Buruh Pabrik</div>
                    <div className="text-xs text-gray-500">(382 Jiwa)</div>
                  </div>
                  <div className="p-3 bg-white rounded-lg shadow-xs border">
                    <div className="text-2xl font-bold text-yellow-600">5.6%</div>
                    <div className="text-sm text-gray-600">Pedagang</div>
                    <div className="text-xs text-gray-500">(84 Jiwa)</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="font-medium text-gray-800 mb-2">Pola Pekerjaan:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Mayoritas penduduk bekerja di sektor <span className="font-medium">pertanian</span> dan <span className="font-medium">industri</span> (55.6%)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Generasi muda cenderung bekerja sebagai <span className="font-medium">buruh pabrik</span> dan <span className="font-medium">pegawai swasta</span></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Hanya <span className="font-medium">2.1%</span> yang bekerja di sektor formal pemerintahan (PNS/TNI/POLRI)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Distribusi Pekerjaan per Kategori</h3>
          <div className="h-[500px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[...groupedByCategory].sort((a, b) => b.value - a.value)}
                margin={{ top: 20, right: 20, left: 0, bottom: 30 }}
                layout="vertical"
                barGap={2}
                barCategoryGap={20}
              >
                <defs>
                  {groupedByCategory.map((item, index) => (
                    <linearGradient 
                      key={`gradient-${index}`}
                      id={`colorCat${index}`} 
                      x1="0" 
                      y1="0" 
                      x2="1" 
                      y2="0"
                    >
                      <stop offset="5%" stopColor={item.color} stopOpacity={0.9}/>
                      <stop offset="95%" stopColor={item.color} stopOpacity={0.5}/>
                    </linearGradient>
                  ))}
                </defs>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f0f0f0" />
                <XAxis 
                  type="number"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                  tickFormatter={(value) => `${value} Jiwa`}
                />
                <YAxis 
                  dataKey="name"
                  type="category"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#4B5563', fontSize: 13 }}
                  width={180}
                />
                <Tooltip 
                  contentStyle={{
                    background: 'rgba(255, 255, 255, 0.98)',
                    border: '1px solid #e5e7eb',
                    borderRadius: '0.5rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    padding: '0.75rem 1rem',
                    fontSize: '0.875rem',
                    maxWidth: '300px'
                  }}
                  itemStyle={{
                    padding: '0.25rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%'
                  }}
                  labelStyle={{
                    fontWeight: 600,
                    color: '#1F2937',
                    marginBottom: '0.5rem',
                    borderBottom: '1px solid #e5e7eb',
                    paddingBottom: '0.5rem',
                    display: 'block'
                  }}
                  formatter={(
                  value: ValueType,
                  _name: NameType,
  item: Payload<ValueType, NameType>
) => {
  const payload = item?.payload as OccupationCategory;
  const percentage = ((payload?.value ?? 0) / 1504 * 100).toFixed(1);

  return [
    <div key="tooltip-content" className="w-full">
      <div className="font-medium">{payload?.name}</div>
      <div className="flex justify-between w-full">
        <span className="text-gray-600">Jumlah:</span>
        <span className="font-medium">{value} Jiwa</span>
      </div>
      <div className="flex justify-between w-full">
        <span className="text-gray-600">Persentase:</span>
        <span className="font-medium">{percentage}%</span>
      </div>
      {payload?.items && (
        <div className="mt-2 pt-2 border-t border-gray-100">
          <div className="text-xs font-medium text-gray-500 mb-1">Rincian:</div>
          {payload.items.map((item, i) => (
            <div key={i} className="flex justify-between text-xs">
              <span>{item.name}:</span>
              <span className="font-medium">{item.value} Jiwa</span>
            </div>
          ))}
        </div>
      )}
    </div>
  ];
}}

                />
                <Bar 
                  dataKey="value"
                  name="Jumlah"
                  fill="#4F46E5"
                  radius={[0, 4, 4, 0]}
                >
                  {groupedByCategory.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={`url(#colorCat${index})`} 
                      stroke="#fff"
                      strokeWidth={1}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* BPJS Kesehatan Chart */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-green-800">Kepesertaan BPJS Kesehatan</h2>
            
            {/* Analysis Section - Simplified */}
            <div className="mt-6 max-w-4xl mx-auto px-4">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Analisis Kepesertaan BPJS Kesehatan
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="h-12 w-12 rounded-full bg-green-50 flex items-center justify-center mx-auto">
                        <span className="text-green-600 font-bold text-lg">
                          {((bpjsData.reduce((sum: number, item: BpjsData) => sum + item.aktif, 0) / bpjsData.reduce((sum: number, item: BpjsData) => sum + item.total, 0)) * 100).toFixed(1)}%
                        </span>
                      </div>
                      <h4 className="text-center text-sm font-medium text-gray-900">Cakupan Peserta Aktif</h4>
                      <p className="text-center text-xs text-gray-500 leading-relaxed">
                        Sebagian besar penduduk telah terdaftar sebagai peserta aktif BPJS Kesehatan.
                      </p>
                    </div>
                    
                    <div className="border-t border-gray-100 my-3"></div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                      <div className="space-y-1">
                        <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto">
                          <span className="text-blue-600 font-bold text-lg">
                            {((bpjsData.reduce((sum: number, item: BpjsData) => sum + item.belumDaftar, 0) / bpjsData.reduce((sum: number, item: BpjsData) => sum + item.total, 0)) * 100).toFixed(1)}%
                          </span>
                        </div>
                        <h4 className="text-center text-sm font-medium text-gray-900">Belum Terdaftar</h4>
                        <p className="text-center text-xs text-gray-500 leading-relaxed max-w-[200px] mx-auto">
                          Potensi peningkatan kepesertaan BPJS Kesehatan.
                        </p>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="h-12 w-12 rounded-full bg-yellow-50 flex items-center justify-center mx-auto">
                          <span className="text-yellow-600 font-bold text-lg">
                            {((bpjsData.reduce((sum: number, item: BpjsData) => sum + item.tidakAktif, 0) / bpjsData.reduce((sum: number, item: BpjsData) => sum + item.total, 0)) * 100).toFixed(1)}%
                          </span>
                        </div>
                        <h4 className="text-center text-sm font-medium text-gray-900">Tidak Aktif</h4>
                        <p className="text-center text-xs text-gray-500 leading-relaxed max-w-[200px] mx-auto">
                          Peserta yang perlu diperhatikan status keaktifannya.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
            <div className="h-[800px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={[...bpjsData].reverse()}
                  margin={{ top: 10, right: 30, left: 100, bottom: 10 }}
                  barGap={0}
                  barCategoryGap={10}
                  barSize={24}
                >
                  <defs>
                    <linearGradient id="colorAktif" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.9}/>
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0.6}/>
                    </linearGradient>
                    <linearGradient id="colorTidakAktif" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.9}/>
                      <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.6}/>
                    </linearGradient>
                    <linearGradient id="colorBelumDaftar" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="5%" stopColor="#EF4444" stopOpacity={0.9}/>
                      <stop offset="95%" stopColor="#EF4444" stopOpacity={0.6}/>
                    </linearGradient>
                  </defs>
                  
                  <CartesianGrid horizontal={false} strokeDasharray="3 3" stroke="#f0f0f0" />
                  
                  <XAxis 
                    type="number"
                    tick={{ fill: '#6B7280', fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(value) => value.toLocaleString('id-ID')}
                  />
                  
                  <YAxis 
                    dataKey="name"
                    type="category"
                    tick={{ fill: '#4B5563', fontSize: 12, fontWeight: 500 }}
                    axisLine={false}
                    tickLine={false}
                    width={90}
                    tickMargin={10}
                  />
                  
                  <Tooltip
  content={({
    active,
    payload,
    label,
  }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      const data = bpjsData.find((item) => item.name === label);
      if (!data) return null;
      
                        return (
                          <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
                            <p className="font-semibold text-gray-900 mb-2">{label}</p>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-gray-700">Total Penduduk:</span>
                                <span className="font-medium">{data.total} Jiwa</span>
                              </div>
                              <div className="border-t border-gray-100 my-2"></div>
                              <div className="flex justify-between">
                                <div className="flex items-center">
                                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                                  <span>Aktif:</span>
                                </div>
                                <div className="text-right">
                                  <div className="font-medium">{data.aktif} Jiwa</div>
                                  <div className="text-sm text-gray-500">{data.persenAktif}%</div>
                                </div>
                              </div>
                              <div className="flex justify-between">
                                <div className="flex items-center">
                                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                                  <span>Tidak Aktif:</span>
                                </div>
                                <div className="text-right">
                                  <div className="font-medium">{data.tidakAktif} Jiwa</div>
                                  <div className="text-sm text-gray-500">{data.persenTidakAktif}%</div>
                                </div>
                              </div>
                              <div className="flex justify-between">
                                <div className="flex items-center">
                                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                                  <span>Belum Daftar:</span>
                                </div>
                                <div className="text-right">
                                  <div className="font-medium">{data.belumDaftar} Jiwa</div>
                                  <div className="text-sm text-gray-500">{data.persenBelumDaftar}%</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  
                  <Legend 
                    verticalAlign="top"
                    height={50}
                    formatter={(value: string) => {
                      if (value === 'aktif') return 'Aktif';
                      if (value === 'tidakAktif') return 'Tidak Aktif';
                      if (value === 'belumDaftar') return 'Belum Daftar';
                      return value;
                    }}
                    wrapperStyle={{
                      paddingTop: '10px',
                      paddingBottom: '20px'
                    }}
                  />
                  
                  <Bar 
                    dataKey="belumDaftar" 
                    name="Belum Daftar" 
                    stackId="a"
                    fill="url(#colorBelumDaftar)" 
                    radius={[0, 4, 4, 0]}
                    label={{
                      position: 'right',
                      formatter: (value: number, index: number) => {
                        const item = bpjsData[index];
                        const percentage = item ? ((value / item.total) * 100).toFixed(1) : '0.0';
                        return value > 0 ? `${value} (${percentage}%)` : '';
                      },
                      fontSize: 11,
                      fill: '#6B7280',
                      fontWeight: 500
                    }}
                  />
                  
                  <Bar 
                    dataKey="tidakAktif" 
                    name="Tidak Aktif" 
                    stackId="a"
                    fill="url(#colorTidakAktif)" 
                    radius={[0, 0, 0, 0]}
                    label={{
                      position: 'right',
                      formatter: (value: number, index: number) => {
                        const item = bpjsData[index];
                        const percentage = item ? ((value / item.total) * 100).toFixed(1) : '0.0';
                        return value > 0 ? `${value} (${percentage}%)` : '';
                      },
                      fontSize: 11,
                      fill: '#6B7280',
                      fontWeight: 500
                    }}
                  />
                  
                  <Bar 
                    dataKey="aktif" 
                    name="Aktif" 
                    stackId="a"
                    fill="url(#colorAktif)" 
                    radius={[4, 0, 0, 4]}
                    label={{
                      position: 'right',
                      formatter: (value: number, index: number) => {
                        const item = bpjsData[index];
                        const percentage = item ? ((value / item.total) * 100).toFixed(1) : '0.0';
                        return value > 0 ? `${value} (${percentage}%)` : '';
                      },
                      fontSize: 11,
                      fill: '#6B7280',
                      fontWeight: 500
                    }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                <span className="mr-2">📋</span> Ringkasan BPJS Kesehatan
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-green-700">Total Peserta</p>
                      <p className="text-2xl font-bold text-green-800">
                        {bpjsData.reduce((sum, item) => sum + item.total, 0).toLocaleString('id-ID')}
                      </p>
                    </div>
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-gray-700">Aktif</span>
                      <span className="font-medium text-green-700">
                        {bpjsData.reduce((sum, item) => sum + item.aktif, 0).toLocaleString('id-ID')} orang
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{
                          width: `${(bpjsData.reduce((sum, item) => sum + item.aktif, 0) / bpjsData.reduce((sum, item) => sum + item.total, 0)) * 100}%`
                        }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-gray-700">Tidak Aktif</span>
                      <span className="font-medium text-yellow-700">
                        {bpjsData.reduce((sum, item) => sum + item.tidakAktif, 0).toLocaleString('id-ID')} orang
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-yellow-500 h-2 rounded-full" 
                        style={{
                          width: `${(bpjsData.reduce((sum, item) => sum + item.tidakAktif, 0) / bpjsData.reduce((sum, item) => sum + item.total, 0)) * 100}%`
                        }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-gray-700">Belum Daftar</span>
                      <span className="font-medium text-red-700">
                        {bpjsData.reduce((sum, item) => sum + item.belumDaftar, 0).toLocaleString('id-ID')} orang
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-red-500 h-2 rounded-full" 
                        style={{
                          width: `${(bpjsData.reduce((sum, item) => sum + item.belumDaftar, 0) / bpjsData.reduce((sum, item) => sum + item.total, 0)) * 100}%`
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                <span className="mr-2">📊</span> Persentase Kepesertaan
              </h3>
              <div className="h-full flex items-center">
                <div className="w-full">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-40 h-40 rounded-full relative">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle 
                          cx="50" 
                          cy="50" 
                          r="45" 
                          fill="none" 
                          stroke="#E5E7EB" 
                          strokeWidth="10"
                        />
                        <circle 
                          cx="50" 
                          cy="50" 
                          r="45" 
                          fill="none" 
                          stroke="#10B981" 
                          strokeWidth="10"
                          strokeLinecap="round"
                          strokeDasharray={`${(bpjsData.reduce((sum, item) => sum + item.aktif, 0) / bpjsData.reduce((sum, item) => sum + item.total, 0)) * 283} 283`}
                          transform="rotate(-90 50 50)"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-3xl font-bold text-green-800">
                          {((bpjsData.reduce((sum, item) => sum + item.aktif, 0) / bpjsData.reduce((sum, item) => sum + item.total, 0)) * 100).toFixed(1)}%
                        </span>
                        <span className="text-sm text-gray-600">Aktif</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                        <span className="text-sm text-gray-700">Aktif</span>
                      </div>
                      <span className="text-sm font-medium text-gray-800">
                        {((bpjsData.reduce((sum, item) => sum + item.aktif, 0) / bpjsData.reduce((sum, item) => sum + item.total, 0)) * 100).toFixed(1)}%
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                        <span className="text-sm text-gray-700">Tidak Aktif</span>
                      </div>
                      <span className="text-sm font-medium text-gray-800">
                        {((bpjsData.reduce((sum, item) => sum + item.tidakAktif, 0) / bpjsData.reduce((sum, item) => sum + item.total, 0)) * 100).toFixed(1)}%
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
                        <span className="text-sm text-gray-700">Belum Daftar</span>
                      </div>
                      <span className="text-sm font-medium text-gray-800">
                        {((bpjsData.reduce((sum, item) => sum + item.belumDaftar, 0) / bpjsData.reduce((sum, item) => sum + item.total, 0)) * 100).toFixed(1)}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



// BPJS Kesehatan Data with calculated percentages
const bpjsData: BpjsData[] = [
  { name: 'Pungsari RT 01', aktif: 151, tidakAktif: 40, belumDaftar: 8, total: 199, persenAktif: 75.88, persenTidakAktif: 20.1, persenBelumDaftar: 4.02 },
  { name: 'Pungsari RT 02', aktif: 136, tidakAktif: 41, belumDaftar: 9, total: 186, persenAktif: 73.12, persenTidakAktif: 22.04, persenBelumDaftar: 4.84 },
  { name: 'Ngablak RT 03', aktif: 109, tidakAktif: 31, belumDaftar: 9, total: 149, persenAktif: 73.15, persenTidakAktif: 20.81, persenBelumDaftar: 6.04 },
  { name: 'Ngablak RT 04', aktif: 136, tidakAktif: 50, belumDaftar: 19, total: 205, persenAktif: 66.34, persenTidakAktif: 24.39, persenBelumDaftar: 9.27 },
  { name: 'Kebaksari RT 05', aktif: 172, tidakAktif: 35, belumDaftar: 2, total: 209, persenAktif: 82.3, persenTidakAktif: 16.75, persenBelumDaftar: 0.96 },
  { name: 'Kebaksari RT 06', aktif: 155, tidakAktif: 68, belumDaftar: 17, total: 240, persenAktif: 64.58, persenTidakAktif: 28.33, persenBelumDaftar: 7.08 },
  { name: 'Tanjungsari RT 07', aktif: 132, tidakAktif: 29, belumDaftar: 13, total: 174, persenAktif: 75.86, persenTidakAktif: 16.67, persenBelumDaftar: 7.47 },
  { name: 'Klampeyan RT 08', aktif: 175, tidakAktif: 45, belumDaftar: 2, total: 222, persenAktif: 78.83, persenTidakAktif: 20.27, persenBelumDaftar: 0.9 },
  { name: 'Klampeyan RT 09', aktif: 110, tidakAktif: 47, belumDaftar: 14, total: 171, persenAktif: 64.33, persenTidakAktif: 27.49, persenBelumDaftar: 8.19 },
  { name: 'Klampeyan RT 10', aktif: 128, tidakAktif: 49, belumDaftar: 5, total: 182, persenAktif: 70.33, persenTidakAktif: 26.92, persenBelumDaftar: 2.75 },
  { name: 'Klampeyan RT 11A', aktif: 92, tidakAktif: 33, belumDaftar: 8, total: 133, persenAktif: 69.17, persenTidakAktif: 24.81, persenBelumDaftar: 6.02 },
  { name: 'Klampeyan RT 11B', aktif: 112, tidakAktif: 39, belumDaftar: 19, total: 170, persenAktif: 65.88, persenTidakAktif: 22.94, persenBelumDaftar: 11.18 },
  { name: 'Karangnongko RT 12', aktif: 158, tidakAktif: 64, belumDaftar: 20, total: 242, persenAktif: 65.29, persenTidakAktif: 26.45, persenBelumDaftar: 8.26 },
];


// Land use data by village
const landUseData = [
  { 
    name: 'Pungsari',
    sawah: 23,
    perkebunan: 0,
    hutanRakyat: 0,
    hutanLindung: 0,
    total: 23
  },
  { 
    name: 'Ngablak',
    sawah: 38,
    perkebunan: 3,
    hutanRakyat: 6,
    hutanLindung: 0,
    total: 47
  },
  { 
    name: 'Kebaksari',
    sawah: 24,
    perkebunan: 3,
    hutanRakyat: 5,
    hutanLindung: 0,
    total: 32
  },
  { 
    name: 'Tanjungsari',
    sawah: 19,
    perkebunan: 0,
    hutanRakyat: 2,
    hutanLindung: 0,
    total: 21
  },
  { 
    name: 'Klampeyan',
    sawah: 18,
    perkebunan: 0,
    hutanRakyat: 5,
    hutanLindung: 0,
    total: 23
  },
  { 
    name: 'Taprukan',
    sawah: 20,
    perkebunan: 0,
    hutanRakyat: 11,
    hutanLindung: 0,
    total: 31
  },
  { 
    name: 'Karangongko',
    sawah: 12,
    perkebunan: 0,
    hutanRakyat: 14,
    hutanLindung: 0,
    total: 26
  },
  { 
    name: 'TOTAL',
    sawah: 154,
    perkebunan: 6,
    hutanRakyat: 43,
    hutanLindung: 0,
    total: 203
  }
];

// Land use summary data
const landUseSummary = [
  { name: 'Sawah', value: 154, color: '#4F46E5' },
  { name: 'Perkebunan', value: 6, color: '#10B981' },
  { name: 'Hutan Rakyat', value: 43, color: '#F59E0B' },
  { name: 'Pemukiman & Lainnya', value: 48.45, color: '#6B7280' }
];

// Define types for occupation data
interface OccupationItem {
  name: string;
  value: number;
  color: string;
  category: string;
  description: string;
  icon: string;
}

interface OccupationCategory {
  name: string;
  value: number;
  color: string;
  items: OccupationItem[];
}

// Socio-economic data with categories
const occupationData: OccupationItem[] = [
  // Sektor Formal
  { 
    name: 'Pegawai Swasta', 
    value: 418, 
    color: '#4F46E5',
    category: 'SEKTOR FORMAL',
    description: 'Bekerja di perusahaan swasta non-pertanian',
    icon: '🏢'
  },
  { 
    name: 'Pegawai Negeri Sipil', 
    value: 32, 
    color: '#3B82F6',
    category: 'SEKTOR FORMAL',
    description: 'Pegawai di instansi pemerintah',
    icon: '🏛️'
  },
  { 
    name: 'TNI', 
    value: 3, 
    color: '#1D4ED8',
    category: 'SEKTOR FORMAL',
    description: 'Anggota Tentara Nasional Indonesia',
    icon: '🎖️'
  },
  { 
    name: 'POLRI', 
    value: 1, 
    color: '#1D4ED8',
    category: 'SEKTOR FORMAL',
    description: 'Anggota Kepolisian RI',
    icon: '👮'
  },
  
  // Sektor Kesehatan
  { 
    name: 'Bidan', 
    value: 2, 
    color: '#EC4899',
    category: 'SEKTOR KESEHATAN',
    description: 'Tenaga kesehatan di bidang kebidanan',
    icon: '👩‍⚕️'
  },
  { 
    name: 'Perawat', 
    value: 2, 
    color: '#F43F5E',
    category: 'SEKTOR KESEHATAN',
    description: 'Tenaga keperawatan',
    icon: '💉'
  },
  
  // Sektor Pertanian
  { 
    name: 'Petani', 
    value: 315, 
    color: '#10B981',
    category: 'SEKTOR PERTANIAN',
    description: 'Mengelola lahan pertanian sendiri',
    icon: '🌾'
  },
  { 
    name: 'Buruh Tani', 
    value: 139, 
    color: '#059669',
    category: 'SEKTOR PERTANIAN',
    description: 'Bekerja sebagai buruh di lahan pertanian',
    icon: '👨‍🌾'
  },
  
  // Sektor Industri
  { 
    name: 'Buruh Pabrik', 
    value: 382, 
    color: '#7C3AED',
    category: 'SEKTOR INDUSTRI',
    description: 'Bekerja di sektor manufaktur/pabrik',
    icon: '🏭'
  },
  
  // Sektor Perdagangan
  { 
    name: 'Pedagang', 
    value: 84, 
    color: '#F59E0B',
    category: 'SEKTOR PERDAGANGAN',
    description: 'Berkecimpung di bidang perdagangan',
    icon: '🛒'
  },
  
  // Lain-lain
  { 
    name: 'Lain-lain', 
    value: 126, 
    color: '#6B7280',
    category: 'LAINNYA',
    description: 'Berbagai pekerjaan lainnya',
    icon: '📌'
  }
];

// Group by category for better visualization
const groupedByCategory = occupationData.reduce<OccupationCategory[]>((acc, curr) => {
  const category = acc.find((cat: OccupationCategory) => cat.name === curr.category);
  if (category) {
    category.value += curr.value;
    category.items.push(curr);
  } else {
    acc.push({
      name: curr.category,
      value: curr.value,
      color: curr.color,
      items: [curr]
    });
  }
  return acc;
}, []);

// Sort by total value
// const sortedOccupations: OccupationItem[] = [...occupationData].sort((a, b) => b.value - a.value);

// Education level data
const educationData = [
  { name: 'SD', value: 213 },
  { name: 'SMP', value: 127 },
  { name: 'SMA', value: 674 },
  { name: 'D-3', value: 38 },
  { name: 'S-1', value: 259 },
  { name: 'S-2', value: 3 },
];

// Welfare data by neighborhood
const welfareData = [
  { 
    name: 'Pungsari',
    praSejahtera: 37,
    sejahtera1: 37,
    sejahtera2: 33,
    sejahtera3: 19,
    sejahtera3Plus: 0
  },
  { 
    name: 'Ngablak',
    praSejahtera: 29,
    sejahtera1: 36,
    sejahtera2: 39,
    sejahtera3: 34,
    sejahtera3Plus: 3
  },
  { 
    name: 'Kebaksari',
    praSejahtera: 26,
    sejahtera1: 43,
    sejahtera2: 41,
    sejahtera3: 36,
    sejahtera3Plus: 9
  },
  { 
    name: 'Tanjungsari',
    praSejahtera: 23,
    sejahtera1: 26,
    sejahtera2: 34,
    sejahtera3: 29,
    sejahtera3Plus: 2
  },
  { 
    name: 'Klampeyan',
    praSejahtera: 43,
    sejahtera1: 48,
    sejahtera2: 42,
    sejahtera3: 27,
    sejahtera3Plus: 0
  },
  { 
    name: 'Taprukan',
    praSejahtera: 24,
    sejahtera1: 34,
    sejahtera2: 27,
    sejahtera3: 23,
    sejahtera3Plus: 0
  },
  { 
    name: 'Karangnongko',
    praSejahtera: 21,
    sejahtera1: 32,
    sejahtera2: 31,
    sejahtera3: 15,
    sejahtera3Plus: 0
  },
  { 
    name: 'TOTAL',
    praSejahtera: 203,
    sejahtera1: 256,
    sejahtera2: 247,
    sejahtera3: 183,
    sejahtera3Plus: 14
  }
];
