/** @type {import('next').NextConfig} */
import { i18n } from "./next-i18next.config.mjs";

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  i18n,
};

export default nextConfig;
