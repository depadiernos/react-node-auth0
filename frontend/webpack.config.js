const path = require("path")
const HtmlPlugin = require("html-webpack-plugin")
const CssPlugin = require("mini-css-extract-plugin")

const dev = process.env.NODE_ENV !== "production"

module.exports = {
  mode: dev ? "development" : "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "linaria/loader",
            options: {
              sourceMap: dev
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: CssPlugin.loader,
            options: {
              hmr: dev
            }
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: dev
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif|woff|woff2|eot|ttf|svg)$/,
        use: [{ loader: "file-loader" }]
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new CssPlugin({
      filename: "styles.css"
    })
  ],
  optimization: {
    noEmitOnErrors: true
  },
  devServer: {
    contentBase: [path.join(__dirname, "public")],
    historyApiFallback: true
  }
}
