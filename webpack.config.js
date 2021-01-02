// As "pluginUri" you must specify this plugin's Bundle Symbolic Name.
// Being an OSGi bundle every DMX plugin has a globally unique "Bundle Symbolic Name" (see OSGi specification).
// The Bundle Symbolic Name is calculated by the Maven Bundle Plugin based on the plugin's Maven Group ID and
// Artifact ID (see this plugin's pom.xml), and has basically the form "<groupId>.<artifactId>".
const pluginUri = 'com.example.dmx-plugin-template'

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const {VueLoaderPlugin}    = require('vue-loader')
const path = require('path')

module.exports = {
  entry: './src/main/js/plugin.js',
  output: {
    path: path.join(__dirname, '/src/main/resources/web'),
    filename: '[chunkhash].plugin.js',
    chunkFilename: '[chunkhash].[name].js',
    publicPath: '/' + pluginUri + '/',
    library: '_' + pluginUri.replace(/[.-]/g, '_'),
    libraryTarget: 'jsonp'
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[contenthash].style.css',
      chunkFilename: '[contenthash].[name].css'
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ],
  stats: {
    entrypoints: false,
    assetsSort: 'chunks'
  },
  performance: {
    hints: false
  }
}
