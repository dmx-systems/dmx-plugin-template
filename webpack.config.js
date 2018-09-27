const { VueLoaderPlugin } = require('vue-loader')

// the same as Bundle-SymbolicName (see pom.xml)
const pluginUri = 'com.example.dm5-plugin-template'

module.exports = {
  entry: './src/main/js/plugin.js',
  output: {
    filename: 'plugin.js',
    path: require('path').resolve(__dirname, 'dist'),
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
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
