import webpack from 'webpack';

import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { BuildOptions } from './buildOptions';



export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const {mode, paths} = options; 

  const isDev = mode === 'development';

  return {
    devServer: isDev ? buildDevServer(options) : undefined,
    mode: mode ?? "development",
    entry: {
      main: paths.entry
    },
    output: {
      filename: "[name].[contenthash].js",
      path: paths.output,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js"],
    },
  };
}