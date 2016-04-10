import path from "path";
import webpack from 'webpack';
import BundleTracker from 'webpack-bundle-tracker';


module.exports = {
  context: __dirname,

  debug: true,
  devtool: 'eval-source-map',
  
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './assets/js/main'
  ],

  output: {
    path: path.resolve('./assets/bundles/'),
    filename: "[name]-[hash].js",
    // Tell django to use this URL to load packages and not use STATIC_URL + bundle_name
    publicPath: 'http://localhost:3000/assets/bundles/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new BundleTracker({filename: './webpack-stats.json'})
  ],

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel']
    }]
  },

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx']
  }
};
