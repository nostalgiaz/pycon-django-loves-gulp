import path from 'path';
import webpack from 'webpack';
import webpackConfig from './webpack.config.babel';
import BundleTracker from 'webpack-bundle-tracker';
import clone from 'clone';

let webpackProdConfig = clone(webpackConfig);

webpackProdConfig.output.path = path.resolve('./assets/dist/');

webpackProdConfig.plugins = [
  new BundleTracker({filename: './webpack-stats-prod.json'}),
  new webpack.optimize.UglifyJsPlugin()
];

module.exports = webpackProdConfig;
