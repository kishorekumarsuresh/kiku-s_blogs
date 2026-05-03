import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const withMDX = createMDX({
  // Optional: you can add remark/rehype plugins later
});

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'], // 👈 important
};

export default withMDX(nextConfig);