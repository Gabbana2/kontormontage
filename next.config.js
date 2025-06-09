/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; img-src 'self' data: https: blob:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; script-src 'self' 'unsafe-eval' 'unsafe-inline'; frame-src https://www.google.com; connect-src 'self' https:;"
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      }
    ]
  },
  async redirects() {
    return [
      // WordPress URL redirects to new Next.js routes
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'page_id',
            value: '193',
          },
        ],
        destination: '/services',
        permanent: true,
      },
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'page_id',
            value: '195',
          },
        ],
        destination: '/om-os',
        permanent: true,
      },
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'page_id',
            value: '197',
          },
        ],
        destination: '/kontakt',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig