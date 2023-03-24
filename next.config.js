/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    basePath: '/Feeder',
    i18n: {
        locales: ['default','en-US', 'ru'],
        defaultLocale: 'default',
        localeDetection: false,
    },

}

module.exports = nextConfig
