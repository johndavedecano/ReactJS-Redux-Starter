var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');

var PORT = 8080;
var ROOT_PATH = __dirname;
var DIST_PATH = path.resolve(__dirname, 'dist');
var SRC_PATH = path.resolve(__dirname, 'src');

module.exports = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    contentBase: DIST_PATH,
    port: PORT
  },
  entry: [
    'webpack-dev-server/client?http://localhost:' + PORT,
    SRC_PATH + '/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: './bundle.js'
  },
  module: {
    loaders:[
      { 
        test: /\.js[x]?$/,
        include: SRC_PATH,
        exclude: /node_modules/,
        loader: ["react-hot-loader", "babel-loader", "eslint-loader"]
      },
      {
          test: /\.scss$/,
          loaders: [
              'style-loader?sourceMap',
              'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
              'sass-loader?sourceMap'
          ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.scss']
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        devtool: 'eval-source-map',
        eslint: {
          configFile: ROOT_PATH + '/.eslintrc',
          fix: true
        },
        context: ROOT_PATH
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
    new DashboardPlugin({ port: PORT })
  ]
}