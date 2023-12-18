const path = require('path')
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
    config.resolve.alias['@'] = path.resolve(__dirname, 'src')
    return config
  },
  images: {
    disableStaticImages: true,
  },
}

module.exports = withVanillaExtract(nextConfig)
