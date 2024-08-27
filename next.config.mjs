/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "m.media-amazon.com" },
      { protocol: "https", hostname: "placehold.co" },
      { protocol: "https", hostname: "fakestoreapi.com" },
      { protocol: "https", hostname: "cdn.myanimelist.net" },
      { protocol: "https", hostname: "image.tmdb.org" },
    ],
  },
};

export default nextConfig;
