/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    async rewrites() {
        return [
            {
                source: '/apis/:path*',
                destination: 'https://excore-bigcommerce-demo.experro.com/apis/:path*' // Proxy to Backend
            }, {
                source: '/mm-images/:path*',
                destination: 'https://excore-bigcommerce-demo.experro.com/mm-images/:path*' // Proxy to Backend
            },{
                source: '/apis/content:path*',
                destination: 'https://excore-bigcommerce-demo.experro.com/apis/content:path*' // Proxy to Backend
            }
        ]
    }
}

module.exports = nextConfig
