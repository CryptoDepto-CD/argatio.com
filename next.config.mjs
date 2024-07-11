import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dllugzki1/**',
      },
      {
        protocol: 'https',
        hostname: '**.discordapp.com',
        port: '',
        pathname: '/attachments/**',
      },
      {
        protocol: 'https',
        hostname: '**.discordapp.net',
        port: '',
        pathname: '/attachments/**',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
