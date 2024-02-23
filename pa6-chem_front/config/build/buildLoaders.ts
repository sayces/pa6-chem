import { ModuleOptions } from "webpack";
import { BuildOptions } from './buildOptions';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {


  const classNamesWithModules = {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: '[local]--[hash:base64:8]',
      },
    },
  }

  return [
    
       {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader, 
          classNamesWithModules, 
          "sass-loader"
        
        ],
        
        exclude: /node_modules/,
      },
      {
        test: /\.([cm]?ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ]
  
}