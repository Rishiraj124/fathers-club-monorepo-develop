//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const path = require('path');
/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public', //creates service workers in the destination
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  //  swcMinify: true,
  disable: false, // means dont disable the PWA on any environment
  workboxOptions: {
    disableDevLogs: true,
  },
});
const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  withPWA,
];

module.exports = composePlugins(...plugins)(nextConfig);
