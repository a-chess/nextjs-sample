const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')
const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
        },
      ],
    })
    return config
  },
  // images: {
  //   disableStaticImages: true,
  // },
}

module.exports = withVanillaExtract(nextConfig)
