/**
 * Base webpack config used across other specific configs
 */

import path from 'path';
import webpack from 'webpack';
import { dependencies } from '../package.json';

const appPath = path.join(__dirname, '..', 'app');

export default {
  externals: [...Object.keys(dependencies || {})],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      }
    ]
  },

  output: {
    path: appPath,
    // https://github.com/webpack/webpack/issues/1114
    libraryTarget: 'commonjs2'
  },

  resolve: {
    modules: [appPath, 'node_modules'],
    extensions: ['.js', '.jsx', '.json']
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production'
    }),
    new webpack.NamedModulesPlugin()
  ]
};
