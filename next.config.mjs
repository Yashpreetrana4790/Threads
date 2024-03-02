// next.config.mjs
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', 'cloudflare-ipfs.com', 'source.unsplash.com'],
  },
};

export default nextConfig;
