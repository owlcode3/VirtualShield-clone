const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
   output: {
      path: path.join(__dirname, "/dist"),
      filename: "index.bundle.js"
   },
   devServer: {
      port: 3010,
      open: true,
      hot: true
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader"
            }
         },
         {
            test: /\.(scss|css)$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
         },
         {
            test: /\.(svg|png|jpg|jpeg|gif)$/,
            use: {
               loader: "file-loader",
               options: {
                  name: "[path][name].[ext]",
                  outputPath: "path of output image directory"
               }
            }
         }
      ]
   },
   plugins: [new MiniCssExtractPlugin()]
};
