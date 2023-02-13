/** @type {import("next").NextConfig} */
export default {
    rewrites() {
        return [];
    },
    redirects() {
        return [];
    },
    trailingSlash: true,
    env: {},
    distDir: ".next",
    cleanDistDir: true,
    poweredByHeader: false,
    productionBrowserSourceMaps: true,
    reactStrictMode: true,
    publicRuntimeConfig: {},
    serverRuntimeConfig: {},
    output: "standalone",
};
