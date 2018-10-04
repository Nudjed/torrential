const ExtractTextPlugin = require('extract-text-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: __dirname,
        exclude: path.join(__dirname, 'node_modules')
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader'
          ]
        })
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new VueLoaderPlugin()
  ]
}