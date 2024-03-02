// next.config.mjs
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', 'cloudflare-ipfs.com'],
  },
};

export default nextConfig;
