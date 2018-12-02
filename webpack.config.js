const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


// exporting this data to be used else where in the project and webpack uses it to do the bundling for our project...
module.exports = {

  // entry file to start building the dependency tree...
  entry: './src/js/index.js',

  // path of the output folder, and the name of the bundled js file...
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app_bundle.js'
  },

  // loaders to be used for different types of files are specified here...
  module: {
    rules: [
      {test: /\.(js)$/, use: ['babel-loader']}
    ]
  },

  // plugins are applied on the output of the loaders, so they do things like uglification, adding -webkit/-moz like things and so on...
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}