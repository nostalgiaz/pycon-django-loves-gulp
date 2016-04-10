import path from 'path';
import webpack from 'webpack';
import webpackConfig from './webpack.config.babel';
import BundleTracker from 'webpack-bundle-tracker';

webpackConfig.output.path = path.resolve('./assets/dist/');

webpackConfig.plugins = [
  new BundleTracker({filename: './webpack-stats-prod.json'}),
  new webpack.optimize.UglifyJsPlugin()
];

module.exports = webpackConfig;
