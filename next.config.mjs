/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "http://localhost:8080/api",
    IMAGE_URL: "http://localhost:8080/images",
  },
};

export default nextConfig;
