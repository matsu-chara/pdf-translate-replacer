import { Configuration } from "webpack";
import path from "path";
import CopyPlugin from "copy-webpack-plugin";

const config: Configuration = {
  entry: {
    content_scripts: path.join(__dirname, "src", "content_scripts.ts"),
    background: path.join(__dirname, "src", "background.ts"),
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        use: "ts-loader",
        exclude: "/node_modules/",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "public", to: "." }],
      options: {
        concurrency: 100,
      },
    }),
  ],
};

export default config;
