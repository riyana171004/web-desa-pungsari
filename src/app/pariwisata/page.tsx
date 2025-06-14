import Image from 'next/image';

export default function PariwisataPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">Pariwisata & Budaya Desa Pungsari</h1>
      
      {/* Batik Section */}
      <section className="mb-16">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-full">
                <Image 
                  src="/assets/batik.jpg" 
                  alt="Batik Khas Pungsari" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="p-6 md:w-1/2">
              <h2 className="text-2xl font-bold text-green-700 mb-4">Batik Khas Pungsari – Warisan Budaya yang Hidup di Tangan Warga</h2>
              <div className="space-y-4 text-gray-700">
                <p>Desa Pungsari, Kecamatan Plupuh, Kabupaten Sragen, tak hanya dikenal dengan keindahan alam dan nilai-nilai kearifan lokalnya, tetapi juga menjadi rumah bagi tradisi batik yang terus hidup dan berkembang. Di balik tenangnya suasana pedesaan, tangan-tangan terampil para pengrajin batik di Pungsari dengan sabar melukis kain menjadi karya seni yang sarat makna dan filosofi.</p>
                <p>Batik khas Pungsari memiliki ciri khas motif-motif tradisional klasik dan kontemporer, dengan corak yang mencerminkan kehidupan agraris dan nilai spiritual masyarakat Jawa. Proses pembuatannya pun masih banyak yang dilakukan secara manual (batik tulis dan cap), menjadikannya produk batik yang autentik dan bernilai tinggi.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">Proses Pembuatan Batik</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="relative w-full pt-[75%]"> {/* 4:3 aspect ratio */}
              <div className="absolute inset-0">
                <Image 
                  src="/assets/penjemuran.jpg" 
                  alt="Proses Penjemuran Batik" 
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Proses Penjemuran</h3>
              <p className="text-gray-600">Salah satu tahap penting dalam pembuatan batik adalah proses penjemuran setelah proses pewarnaan.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="relative w-full pt-[75%]"> {/* 4:3 aspect ratio */}
              <div className="absolute inset-0">
                <Image 
                  src="/assets/pemilikbatik.jpg" 
                  alt="Pemilik Usaha Batik" 
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Pengrajin Batik Lokal</h3>
              <p className="text-gray-600">Para pengrajin batik Pungsari yang menjaga kelestarian warisan budaya leluhur.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="bg-green-50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Pengalaman Membatik</h2>
        <div className="space-y-4 text-gray-700">
          <p>Tidak hanya sebagai warisan budaya, batik di Pungsari juga menjadi sumber penghidupan masyarakat lokal, serta bentuk nyata dari semangat pelestarian budaya nenek moyang. Pengunjung yang datang dapat melihat langsung proses pembuatan batik, bahkan ikut serta dalam workshop membatik yang diadakan oleh para pengrajin lokal.</p>
          <p>Jika Anda berkunjung ke Desa Pungsari, jangan lewatkan kesempatan untuk mengenal, belajar, dan membawa pulang selembar batik khas desa kami—karena setiap goresannya adalah cerita, dan setiap motifnya adalah jiwa dari tanah Jawa.</p>
        </div>
      </section>

      {/* Visit Information */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Informasi Kunjungan</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-green-700 mb-2">Lokasi:</h3>
            <p>Desa Pungsari, Kecamatan Plupuh, Kabupaten Sragen, Jawa Tengah</p>
          </div>
          <div>
            <h3 className="font-semibold text-green-700 mb-2">Kontak:</h3>
            <p>Kantor Desa Pungsari</p>
            <p>Email: desapungsari@example.com</p>
            <p>Telepon: (0271) 1234567</p>
          </div>
        </div>
      </section>

      {/* Sangiran Section */}
      <section className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex flex-row-reverse">
          <div className="md:w-1/2">
            <div className="relative h-96">
              <Image 
                src="/assets/sangiran.jpg" 
                alt="Museum Manusia Purba Sangiran" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="p-6 md:w-1/2">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Jejak Peradaban Manusia Awal Dunia di Tanah Pungsari</h2>
            <div className="space-y-4 text-gray-700">
              <p>Desa Pungsari, Kecamatan Plupuh, Sragen, memiliki kebanggaan tersendiri karena berada di kawasan Cagar Budaya Dunia: Sangiran — sebuah situs arkeologi manusia purba yang diakui oleh UNESCO sebagai Warisan Budaya Dunia sejak tahun 1996.</p>
              <p>Museum Manusia Purba Sangiran merupakan jendela untuk menelusuri jejak kehidupan manusia ribuan hingga jutaan tahun silam. Di museum ini, pengunjung dapat melihat langsung fosil manusia purba, peralatan batu, sisa-sisa hewan purba, dan diorama kehidupan masa lampau yang menggugah imajinasi.</p>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-green-50">
          <div className="max-w-4xl mx-auto">
            <div className="md:flex items-center gap-8">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                  <Image 
                    src="/assets/sangiran2.jpg" 
                    alt="Pemandangan Situs Sangiran" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <p className="text-gray-700">
                  Tak hanya menjadi tempat wisata edukatif, Sangiran juga menyuguhkan pemandangan alam pedesaan yang asri serta nilai sejarah yang sangat dalam. Museum ini menjadi destinasi wisata unggulan di Sragen dan menjadi bagian dari identitas kebudayaan Desa Pungsari yang membanggakan.
                </p>
                <p className="text-gray-700 mt-4 font-medium">
                  Jika Anda mencintai sejarah dan ingin menyentuh langsung warisan evolusi manusia, Sangiran adalah tempat yang wajib dikunjungi. Karena di sinilah, tanah Jawa menyimpan cerita awal manusia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sumur Sendang Mbah Gumul Section */}
      <section className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <div className="relative h-96">
              <Image 
                src="/assets/sumur.jpg" 
                alt="Sumur Sendang Mbah Gumul" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="p-6 md:w-1/2">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Sumur Sendang Mbah Gumul</h2>
            <div className="space-y-4 text-gray-700">
              <p>Sumber Air Legendaris Desa Pungsari</p>
              <p>Terletak di Desa Pungsari, Sumur Sendang Mbah Gumul dikenal sebagai mata air alami yang tak pernah kering, bahkan di musim kemarau. Konon, sendang ini memiliki nilai spiritual tinggi karena berkaitan dengan sosok sesepuh desa, Mbah Gumul, yang dikenal bijaksana dan berilmu tinggi.</p>
              <p>Warga sekitar percaya air sendang ini membawa keberkahan dan kerap digunakan untuk bersuci serta ngalap berkah. Dikelilingi pepohonan rindang dan suasana tenang, sendang ini menjadi tempat yang menyejukkan, sekaligus bagian dari kearifan lokal yang tetap hidup hingga kini.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Taman Literasi Section */}
      <section className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex flex-row-reverse">
          <div className="md:w-1/2">
            <div className="relative h-96">
              <Image 
                src="/assets/taman.jpg" 
                alt="Taman Literasi Desa Pungsari" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="p-6 md:w-1/2">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Taman Literasi Desa Pungsari</h2>
            <div className="space-y-4 text-gray-700">
              <p>Taman Literasi Desa Pungsari adalah ruang terbuka hijau yang dirancang sebagai pusat baca dan edukasi warga. Dikelilingi pepohonan dan udara segar khas pedesaan, taman ini menghadirkan suasana santai untuk membaca buku, belajar bersama, atau sekadar merenung di bawah langit yang teduh.</p>
              <p>Dibuka untuk umum, taman ini menyediakan rak buku terbuka, tempat duduk sederhana, dan suasana nyaman untuk semua usia. Anak-anak desa belajar sambil bermain, remaja berdiskusi kreatif, dan para orang tua menemukan ruang berbagi pengetahuan.</p>
              <p>Taman Literasi ini menjadi bukti bahwa semangat belajar tak mengenal ruang dan batas—bahkan di alam terbuka, ilmu pengetahuan bisa tumbuh dan mengakar kuat di hati masyarakat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dokumentasi Kegiatan Desa Pungsari */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-green-800 mb-8 text-center">Dokumentasi Kegiatan Desa Pungsari</h2>
        
        {/* Single Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Batik Section */}
          {[
            {
              id: 1,
              title: 'Pelatihan Membatik',
              description: 'Kegiatan pelatihan membatik untuk pemuda-pemudi desa bersama pengrajin lokal',
              image: '/assets/kegiatanbatik.jpg',
              category: 'batik'
            },
            {
              id: 2,
              title: 'Pameran Batik Pungsari',
              description: 'Kegiatan pameran hasil karya batik warga Desa Pungsari',
              image: '/assets/kegiatanbatik2.jpg',
              category: 'batik'
            },
            {
              id: 3,
              title: 'Proses Pembuatan Batik',
              description: 'Proses awal pembuatan pola batik dengan lilin malam',
              image: '/assets/prosesbatik.jpg',
              category: 'batik'
            },
            {
              id: 4,
              title: 'Pewarnaan Batik',
              description: 'Proses pewarnaan kain batik menggunakan bahan alami',
              image: '/assets/prosesbatik2.jpg',
              category: 'batik'
            },
            {
              id: 5,
              title: 'Pelorodan Lilin',
              description: 'Tahap pelorodan lilin malam dari kain batik',
              image: '/assets/prosesbatik3.jpg',
              category: 'batik'
            },
            {
              id: 6,
              title: 'Batik Tulis Pungsari',
              description: 'Hasil akhir batik tulis khas Desa Pungsari yang siap dipasarkan',
              image: '/assets/prosesbatik4.jpg',
              category: 'batik'
            },

            {
              id: 16,
              title: 'Kirab Batik Desa Pungsari',
              description: 'Kegiatan kirab batik menampilkan keindahan batik khas Pungsari',
              image: '/assets/kirabbatik.jpg',
              category: 'kirab-batik'
            },
            {
              id: 17,
              title: 'Prosesi Kirab Budaya',
              description: 'Masyarakat berpartisipasi dalam prosesi kirab budaya batik',
              image: '/assets/kirabbatik2.jpg',
              category: 'kirab-batik'
            },
            {
              id: 18,
              title: 'Peserta Kirab Batik',
              description: 'Penampilan peserta kirab dengan mengenakan batik khas Pungsari',
              image: '/assets/kirabbatik3.jpg',
              category: 'kirab-batik'
            },
            {
              id: 19,
              title: 'Hasil Kerajinan Batik',
              description: 'Berbagai macam produk kerajinan batik hasil karya warga',
              image: '/assets/kerajinanbatik.jpg',
              category: 'kerajinan'
            },
            {
              id: 20,
              title: 'Pameran Kerajinan Batik',
              description: 'Kegiatan pameran dan penjualan produk kerajinan batik',
              image: '/assets/kerajinanbatik2.jpg',
              category: 'kerajinan'
            },
            {
              id: 21,
              title: 'Penjualan Batik Online',
              description: 'Pemasaran dan penjualan produk batik secara online',
              image: '/assets/penjualanbatik.jpg',
              category: 'kerajinan'
            },
            {
              id: 11,
              title: 'Tradisi Bancakan',
              description: 'Kegiatan bancakan sebagai wujud syukur masyarakat Desa Pungsari',
              image: '/assets/bancakan.jpg',
              category: 'budaya'
            },
            {
              id: 12,
              title: 'Persiapan Bancakan',
              description: 'Masyarakat menyiapkan hidangan untuk acara bancakan bersama',
              image: '/assets/bancakan2.jpg',
              category: 'budaya'
            },
            {
              id: 13,
              title: 'Kebersamaan dalam Bancakan',
              description: 'Momen kebersamaan warga dalam tradisi bancakan',
              image: '/assets/bancakan3.jpg',
              category: 'budaya'
            },
            {
              id: 14,
              title: 'Hari Kebudayaan',
              description: 'Pertunjukan seni budaya dalam rangka memeriahkan hari kebudayaan',
              image: '/assets/harikebudayaan.jpg',
              category: 'budaya'
            },
            {
              id: 15,
              title: 'Pertunjukan Budaya',
              description: 'Penampilan seni tradisional di acara hari kebudayaan',
              image: '/assets/harikebudayaan2.jpg',
              category: 'budaya'
            },
            {
              id: 22,
              title: 'Kirab Pengantin Adat',
              description: 'Prosesi kirab pengantin adat dengan iringan musik tradisional',
              image: '/assets/kirabmanten.jpg',
              category: 'kesenian'
            },
            {
              id: 23,
              title: 'Pertunjukan Keroncong',
              description: 'Penampilan musik keroncong oleh warga Desa Pungsari',
              image: '/assets/keroncong.jpg',
              category: 'kesenian'
            },
            {
              id: 24,
              title: 'Pertunjukan Karawitan',
              description: 'Grup karawitan desa menampilkan gending-gending Jawa',
              image: '/assets/karawitan.jpg',
              category: 'kesenian'
            },
            {
              id: 25,
              title: 'Latihan Karawitan',
              description: 'Kegiatan rutin latihan karawitan untuk melestarikan budaya Jawa',
              image: '/assets/karawitan2.jpg',
              category: 'kesenian'
            },
            {
              id: 9,
              title: 'Taman Desa Pungsari',
              description: 'Taman desa yang asri dan nyaman untuk beristirahat',
              image: '/assets/taman.jpg',
              category: 'wisata'
            },
            {
              id: 10,
              title: 'Sumur Mbah Gumul',
              description: 'Situs bersejarah di Desa Pungsari yang masih terpelihara',
              image: '/assets/sumur.jpg',
              category: 'wisata'
            }
          ].map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 w-full">
                <Image 
                  src={item.image} 
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}