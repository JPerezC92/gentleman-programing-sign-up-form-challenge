/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: { styledComponents: { ssr: true } },
};

module.exports = nextConfig;
