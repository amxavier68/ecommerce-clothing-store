const path = require('path');
require("regenerator-runtime/runtime");

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devConfig = {
  mode: 'development',
  devtool: 'source-map',

  // Entry/output
  entry: {
    path: path.resolve(__dirname, 'src'),
    
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },

  devServer: {
    port: 3000,
    static: path.resolve(__dirname, 'dist'),
    historyApiFallback: true
  },

  // Plugins
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack v5 Boilerplate',
      template: 'public/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin()
  ],

  // Loaders
  module: {
    rules: [
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(hbr|handlebars)$/i,
        loader: 'handlebars-loader'
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
          
        ],
      },
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      }
    ],
  }
};

module.exports = devConfig;