import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Kosongkan saja atau isi config lain jika ada
};

export default nextConfig;

// Config ini tetap perlu untuk middleware
export const config = {
  matcher: ["/admin/:path*"],
};
