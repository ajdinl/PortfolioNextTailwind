/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  poweredByHeader: false,
  async redirects() {
    return [
      { source: '/resume', destination: '/cv', permanent: true },
      { source: '/cv.pdf', destination: '/Ajdin-Lojic-CV.pdf', permanent: true },
      { source: '/resume.pdf', destination: '/Ajdin-Lojic-CV.pdf', permanent: true },
    ]
  },
}

module.exports = nextConfig
