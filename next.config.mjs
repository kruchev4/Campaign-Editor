/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force Webpack (disables Turbopack entirely)
  experimental: {
    turbo: false,
  },

  // Fully disable LightningCSS (which is incompatible with Tailwind v4)
  compiler: {
    css: {
      lightningcss: false,
    },
  },
};

export default nextConfig;