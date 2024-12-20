/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/hugogaray',
  output: 'export',  
  
  reactStrictMode: true,
  images: {
    unoptimized: true, // Desactiva la optimización de imágenes para entornos estáticos
  },

  
};

export default nextConfig;
