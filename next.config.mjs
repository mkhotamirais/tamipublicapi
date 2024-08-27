/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "*" },
      // { protocol: "https", hostname: "m.media-amazon.com" },
      // { protocol: "https", hostname: "placehold.co" },
      // { protocol: "https", hostname: "fakestoreapi.com" },
      // { protocol: "https", hostname: "cdn.myanimelist.net" },
      // { protocol: "https", hostname: "image.tmdb.org" },
      // mediastack
      // { protocol: "https", hostname: "www.kreiszeitung.de" },
      // { protocol: "https", hostname: "www.twincities.com" },
      // { protocol: "https", hostname: "storage.pubble.nl" },
      // newsapi
      // { protocol: "https", hostname: "media.wired.com" },
      // { protocol: "https", hostname: "gizmodo.com" },
      // { protocol: "https", hostname: "a.fsdn.com" },
      // { protocol: "https", hostname: "readwrite.com" },
      // { protocol: "https", hostname: "cdn.vox-cdn.com" },
      // { protocol: "https", hostname: "media.zenfs.com" },
      // { protocol: "https", hostname: "i.blogs.es" },
    ],
  },
};

export default nextConfig;
