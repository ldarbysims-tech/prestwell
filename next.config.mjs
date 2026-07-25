/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/care-options',
        destination: '/memberships',
        permanent: true,
      },
      {
        source: '/how-it-works',
        destination: '/services',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
