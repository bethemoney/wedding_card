/** @type {import('next').NextConfig} */
const isProduction = true;
//const productionURL = 'https://bethemoney.github.io';
const productionURL = 'http://localhost:3000';
const productionPath = '/wedding_card'

const nextConfig = {
  //  output: 'export',
  basePath: isProduction ? productionPath : "",
  images: {
    loader: 'imgix',
    path: isProduction ? productionURL : 'http://localhost:3000',
  },
  assetPrefix: isProduction ? productionPath : '',
};

export default nextConfig;