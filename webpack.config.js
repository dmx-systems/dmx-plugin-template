// As "pluginUri" you must specify this plugin's Bundle Symbolic Name.
// Being an OSGi bundle every DMX plugin has a globally unique "Bundle Symbolic Name" (see OSGi specification).
// The Bundle Symbolic Name is calculated by the Maven Bundle Plugin based on the plugin's Maven Group ID and
// Artifact ID (see this plugin's pom.xml), and has basically the form "<groupId>.<artifactId>".
const pluginUri = 'com.example.dm5-plugin-template'

const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: './src/main/js/plugin.js',
  output: {
    path: __dirname + '/src/main/resources/web',
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
