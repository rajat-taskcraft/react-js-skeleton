'use strict';

const webpack = require('webpack');
const dotenv = require('dotenv');
const { merge } = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');
const common = require('./webpack.common.js');

const env = dotenv.config().parsed;
env.API_URL = env.PROD_API_URL;
env.CLIENT_URL = env.PROD_CLIENT_URL;

const envVariables = Object.keys(env).reduce((prev, next) => {
  prev[next] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin(envVariables),
    new CompressionPlugin({ test: /\.(js|css)$/i }),
  ],
  performance: {
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith('.js.gz');
    },
  },
});
