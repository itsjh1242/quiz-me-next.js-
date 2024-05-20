/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/quiz-me",
  assetPrefix: process.env.NODE_ENV === "production" ? "https://itsjh1242.github.io/quiz-me/" : "",
};

export default nextConfig;
