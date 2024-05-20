/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true
    },
    images: {
        domains: [
            'images.unsplash.com',
            'cdni.iconscout.com'
        ],
    },
};

export default nextConfig;
