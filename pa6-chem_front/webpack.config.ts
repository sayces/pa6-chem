import path from "path";
import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

export default (env: any) => {
  const config: webpack.Configuration = {
    mode: env.mode ?? "development",
    entry: {
      main: path.resolve(__dirname, "src", "index.tsx"),
    },
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "build"),
      clean: true,
    },
    plugins: [
      new HTMLWebpackPlugin({
        title: `youko's chemistry`,
        template: path.resolve(__dirname, "public", "index.html"),
      }),
      new MiniCssExtractPlugin({
        path: path.resolve(__dirname, "sass", 'common.scss')
      })
    ],
    module: {
      rules: [
        {
          test: /\.scss$/i,
          use: [
            // Creates `style` nodes from JS strings
            MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.([cm]?ts|tsx)$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".scss", ".tsx", ".ts", ".jsx", ".js"],
    },
    devServer: {
      port: 5005,
      open: true,
    },
  };

  return config;
};
