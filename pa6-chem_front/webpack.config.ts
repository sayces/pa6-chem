import path from "path";
import webpack from "webpack";
import { buildWebpack } from './config/build/buildWebpack';
import { BuildMode, BuildPaths } from "./config/build/buildOptions";

interface EnvVars {
  mode?: BuildMode;
  port?: number;
}

export default (env: EnvVars) => {
  
  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    public: path.resolve(__dirname, 'public'),
    src: path.resolve(__dirname, 'src'),
}

const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 5005,
    mode: env.mode ?? 'development',
    paths
  })
  
  return config;
};
