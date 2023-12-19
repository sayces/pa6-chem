import path from "path";
import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";


export default (env: any) => {
  const config: webpack.Configuration = {
    mode: env.mode ?? "development",
    entry: {
      main: path.resolve(__dirname, 'src', 'index.tsx'),
    },
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "build"),
      clean: true,
    },
    plugins: [
      new HTMLWebpackPlugin({
        title: `youko's chemistry`,
        template: path.resolve(__dirname, 'public', 'index.html'),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.([cm]?ts|tsx)$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.json$/,
          use: 'json-loader'
        }
      ],
    },
    resolve: {
      extensions: [".json", ".tsx", ".ts", ".jsx",".js"],
    },
  }

  return config;
};
