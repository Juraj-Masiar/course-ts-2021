const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  target: ["web", `es2019`],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin({ percentBy: 'entries' }),
    new MiniCssExtractPlugin(),
    ...['index'].map(path => new HtmlWebpackPlugin({
      inject: true,
      // chunks: [path],

      filename: `${path}.html`,
      template: `src/${path}.html`,
    })),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

};
