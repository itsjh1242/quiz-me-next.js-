/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
  assetPrefix: process.env.NODE_ENV === "production" ? "https://itsjh1242.github.io/quiz-me/" : "",
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
