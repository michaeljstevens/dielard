var AnyBarWebpackPlugin = require('anybar-webpack');

module.exports = {
  entry: "./frontend/takeupless.jsx",
  output: {
    path: "app/assets/javascripts",
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js", ".jsx" ]
  }
};


// plugins: [
//   new AnyBarWebpackPlugin({
//     enableNotifications: true
//   })
// ],
