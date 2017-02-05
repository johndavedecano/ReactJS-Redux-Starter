/* eslint-disable no-var, strict */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), config.devServer)
  .listen(config.devServer.port, 'localhost', function (err) {
      if (err) { console.log(err); }
      console.log('Listening at localhost:' + config.devServer.port);
  });