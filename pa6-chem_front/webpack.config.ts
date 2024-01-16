import path from "path";
import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { Configuration } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
const devServer: DevServerConfiguration = {};


export default (env: any) => {
  

  const config: Configuration = {
    devServer: {
      port: 5005,
      open: true,
    },
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
      new MiniCssExtractPlugin({}),
    ],
    module: {
      rules: [
        {
          test: /\.scss$/i,
          use: [
            "style-loader", "css-modules-typescript-loader", "css-loader"
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
      extensions: [".tsx", ".ts", ".jsx", ".js"],
    },
  };

  return config;
};
