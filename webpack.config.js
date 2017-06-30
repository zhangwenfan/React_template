/**
 * Created by Administrator on 2017/6/1.
 */
let debug = process.env.NODE_ENV !== "production";
let webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./src/js/app.js",
  output: {
    path: __dirname + "/build",
    filename: "app.min.js",
    publicPath: '/build'
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,         // Match both .js and .jsx files
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-decorators-legacy'],
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  resolve: {
    alias: {
      "eventEmitter/EventEmitter": "wolfy87-eventemitter"
    }
  },
};