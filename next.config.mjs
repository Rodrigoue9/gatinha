/** @type {import('next').NextConfig} */
const isDevelopment = process.env.NODE_ENV === "development";

const nextConfig = {
  distDir: isDevelopment ? ".next-dev" : ".next",
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
