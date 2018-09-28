// the same as Bundle-SymbolicName (see pom.xml)
const pluginUri = 'com.example.dm5-plugin-template'

const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: './src/main/js/plugin.js',
  output: {
    filename: 'plugin.js',
    publicPath: '/' + pluginUri + '/',
    library: '_' + pluginUri.replace(/[.-]/g, '_'),
    libraryTarget: 'jsonp'
  },
  resolve: {
    extensions: [".js", ".vue"]
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
        loader: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
