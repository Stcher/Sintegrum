const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "",
  },
  mode: "development",
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  module: {
    rules: [
        {
        test: /\.html$/i,
        loader: 'html-loader',  
        },
      {
        test: /\.(scss|sass)$/,
        use: [
          "style-loader", 
          "css-loader",  
          "sass-loader", 
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
  ],
};