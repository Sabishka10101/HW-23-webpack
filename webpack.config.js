const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/main.js",
    devtool: false,
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "build"),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: "asset",
            },
        ],
    },

    plugins: [new HtmlWebpackPlugin(), new MiniCssExtractPlugin()]
}