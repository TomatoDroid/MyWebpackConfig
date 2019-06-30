const TerserWebpackPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin }= require('clean-webpack-plugin')

module.exports = {
  entry: {
    "large-number": "./src/index.js",
    "large-number.min": "./src/index.js"
  },
  output: {
    filename: "[name].js",
    library: "LZLargeNumber",
    libraryTarget: "umd",
    libraryExport: "default"
  },
  mode: "none",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        include: /\.min\.js$/
      })
    ]
  },
  plugins:[
      new CleanWebpackPlugin()
  ]
};
