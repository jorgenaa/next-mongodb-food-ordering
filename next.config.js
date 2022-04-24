/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack5: true,
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        //test: /\.(js|ts)x?$/,
       // for webpack 5 use
         and: [/\.(js|ts)x?$/] 
      },
      
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
}

module.exports = nextConfig
