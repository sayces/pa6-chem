
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HTMLWebpackPlugin from "html-webpack-plugin";
import { Configuration } from 'webpack';
import { BuildOptions } from "./buildOptions";

export function buildPlugins({paths}: BuildOptions): Configuration['plugins'] {
  return [
      new HTMLWebpackPlugin({
        title: `youko's chemistry`,
        template: paths.html,
      }),
      new MiniCssExtractPlugin({}),
    ]
  
  
}