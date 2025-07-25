/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'st5qd35jma20feka.public.blob.vercel-storage.com', // domain gambar dari Vercel Blob
      },
    ],
  },
};

module.exports = nextConfig;
