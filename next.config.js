/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      allowFutureImage: true,
    },
    newNextLinkBehavior: true
  },
  images:{
    domains: ["files.stripe.com"],
  }
}

module.exports = nextConfig
