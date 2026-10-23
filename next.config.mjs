/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // static site in /out — host on Netlify, Vercel or GitHub Pages
  images: { unoptimized: true },
};
export default nextConfig;
