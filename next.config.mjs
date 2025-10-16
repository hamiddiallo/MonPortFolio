/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Désactiver les vérifications pour le build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Optimisations pour Node.js 22
  experimental: {
    optimizeCss: false, // Désactiver l'optimisation CSS problématique
  }
};

export default nextConfig;